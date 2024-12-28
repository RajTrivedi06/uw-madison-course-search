# app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers.courses import router as courses_router
from .routers.users import router as users_router
from .database import engine, Base
from dotenv import load_dotenv
import os
import asyncio

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="UW Madison Course Search API",
    description="API for managing courses, user accounts, discussions, and grade distributions.",
    version="1.0.0"
)

# CORS configuration
origins = [
    "http://localhost:5173",
    # Add other origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Or ["*"] to allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(courses_router)
app.include_router(users_router)

# Create all database tables (dev/test only) using FastAPI's startup event
@app.on_event("startup")
async def startup_event():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
