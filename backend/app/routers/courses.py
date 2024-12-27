# app/routers/courses.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from .. import crud, models, schemas
from ..database import AsyncSessionLocal
from sqlalchemy.future import select

router = APIRouter(
    prefix="/api/courses",
    tags=["courses"],
)

# Dependency to get DB session
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

@router.post("/", response_model=schemas.CourseRead)
async def create_course(course: schemas.CourseCreate, db: AsyncSession = Depends(get_db)):
    # Check if course_code already exists
    result = await db.execute(select(models.Course).where(models.Course.course_code == course.course_code))
    existing_course = result.scalars().first()
    if existing_course:
        raise HTTPException(status_code=400, detail="Course code already exists.")
    return await crud.create_course(db=db, course=course)

@router.get("/", response_model=List[schemas.CourseRead])
async def read_courses(skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    courses = await crud.get_courses(db=db, skip=skip, limit=limit)
    return courses

@router.get("/{course_id}", response_model=schemas.CourseRead)
async def read_course(course_id: int, db: AsyncSession = Depends(get_db)):
    course = await crud.get_course(db=db, course_id=course_id)
    if course is None:
        raise HTTPException(status_code=404, detail="Course not found.")
    return course
