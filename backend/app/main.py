# app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import courses
from .database import engine, Base
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="UW Madison Course Search API",
    description="API for managing courses, user accounts, discussions, and grade distributions.",
    version="1.0.0"
)

# Configure CORS
origins = [
    "http://localhost:5173",  # Frontend
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
app.include_router(courses.router)

# Create all tables
# Note: In production, use Alembic for migrations instead of creating tables directly
Base.metadata.create_all(bind=engine)
