# app/crud.py

from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from . import models, schemas

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
