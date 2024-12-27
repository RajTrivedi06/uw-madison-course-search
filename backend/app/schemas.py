# app/schemas.py

from pydantic import BaseModel
from typing import Optional

class CourseBase(BaseModel):
    course_code: str
    title: str
    description: Optional[str] = None

class CourseCreate(CourseBase):
    pass

class CourseRead(CourseBase):
    id: int

    class Config:
        orm_mode = True
