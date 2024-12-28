# app/crud.py

from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from . import models, schemas

# === User CRUD ===
async def get_user_by_email(db: AsyncSession, email: str):
    result = await db.execute(select(models.User).where(models.User.email == email))
    return result.scalars().first()

async def get_user_by_username(db: AsyncSession, username: str):
    result = await db.execute(select(models.User).where(models.User.username == username))
    return result.scalars().first()

async def create_user(db: AsyncSession, user: schemas.UserCreate, password_hash: str):
    db_user = models.User(
        username=user.username,
        email=user.email,
        password_hash=password_hash,
    )
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user

# === Course CRUD ===
async def get_course(db: AsyncSession, course_id: int):
    result = await db.execute(select(models.Course).where(models.Course.id == course_id))
    return result.scalars().first()

async def get_courses(db: AsyncSession, skip: int = 0, limit: int = 100):
    result = await db.execute(select(models.Course).offset(skip).limit(limit))
    return result.scalars().all()

async def create_course(db: AsyncSession, course: schemas.CourseCreate):
    db_course = models.Course(**course.dict())
    db.add(db_course)
    await db.commit()
    await db.refresh(db_course)
    return db_course
