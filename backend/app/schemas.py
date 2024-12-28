# app/schemas.py

from pydantic import BaseModel, EmailStr
from typing import Optional

# === Course Schemas (unchanged) ===
class CourseBase(BaseModel):
    course_code: str
    title: str
    description: Optional[str] = None

class CourseCreate(CourseBase):
    pass

class CourseRead(CourseBase):
    id: int

    class Config:
        from_attributes = True  # Updated from orm_mode


# === User Schemas ===
class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserRead(UserBase):
    id: int

    class Config:
        from_attributes = True  # Updated from orm_mode

# For login requests
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# For returning tokens
class Token(BaseModel):
    access_token: str
    token_type: str
