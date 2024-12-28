# app/routers/users.py

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from jose import JWTError, jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext
from typing import Optional
import logging


from .. import crud, models, schemas
from ..database import AsyncSessionLocal

router = APIRouter(
    prefix="/api/users",
    tags=["users"],
)

# ==============================
# Configurations for JWT
# ==============================
SECRET_KEY = "t1Xh00mQ5zMA1SFqG5Q5q9N1LDrt3slx0l2YUBSL2x8"  # Load from .env in production
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# For hashing passwords
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# For OAuth2
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/users/login")

logger = logging.getLogger(__name__)


# Dependency for DB session
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

# Utility: verify password
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Utility: hash password
def get_password_hash(password):
    return pwd_context.hash(password)

# Utility: create JWT
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Utility: get current user from token
async def get_current_user(token: str = Depends(oauth2_scheme), db: AsyncSession = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    user = await crud.get_user_by_email(db, email)
    if user is None:
        raise credentials_exception
    return user

# ==============================
# Routes
# ==============================

@router.post("/signup", response_model=schemas.UserRead)
async def signup(user_data: schemas.UserCreate, db: AsyncSession = Depends(get_db)):
    try:
        # Check if email already exists
        existing_user_email = await crud.get_user_by_email(db, user_data.email)
        if existing_user_email:
            raise HTTPException(status_code=400, detail="Email already in use.")
        
        # Check if username already exists
        existing_user_username = await crud.get_user_by_username(db, user_data.username)
        if existing_user_username:
            raise HTTPException(status_code=400, detail="Username already in use.")
        
        # Hash the password
        hashed_password = get_password_hash(user_data.password)
        
        # Create the user
        user = await crud.create_user(db, user_data, hashed_password)
        
        return schemas.UserRead.from_orm(user)
    
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        logger.error(f"Unexpected error during sign-up: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.post("/login", response_model=schemas.Token)
async def login(credentials: schemas.UserLogin, db: AsyncSession = Depends(get_db)):
    # Check if user with that email exists
    user = await crud.get_user_by_email(db, credentials.email)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    # Verify password
    if not verify_password(credentials.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    # Create JWT token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, 
        expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=schemas.UserRead)
async def read_current_user(current_user: models.User = Depends(get_current_user)):
    """
    Example of a protected endpoint that returns the currently logged-in user's info.
    """
    return current_user
