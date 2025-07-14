from fastapi import FastAPI
from fastapi.routing import APIRouter  # Ensure this import is present
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
import aiosqlite
from contextlib import asynccontextmanager

app = FastAPI()
api_router = APIRouter(prefix="/api")

# Global database connection
db_connection = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global db_connection
    db_connection = await aiosqlite.connect("portfolio.db")
    await db_connection.execute("""
        CREATE TABLE IF NOT EXISTS status_checks (
            id TEXT PRIMARY KEY,
            client_name TEXT,
            timestamp TEXT
        )
    """)
    await db_connection.commit()
    yield
    await db_connection.close()

app = FastAPI(lifespan=lifespan)

async def get_db():
    return db_connection

# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    async with await get_db() as db:
        await db.execute(
            "INSERT INTO status_checks (id, client_name, timestamp) VALUES (?, ?, ?)",
            (input.id, input.client_name, input.timestamp.isoformat())
        )
        await db.commit()
    return StatusCheck(**input.model_dump())

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = []
    async with await get_db() as db:
        async for row in db.execute("SELECT id, client_name, timestamp FROM status_checks"):
            status_checks.append(StatusCheck(id=row[0], client_name=row[1], timestamp=datetime.fromisoformat(row[2])))
    return status_checks

app.include_router(api_router)