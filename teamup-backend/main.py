from fastapi import FastAPI, Depends, HTTPException, status
from typing import List

from sqlalchemy.orm import Session

from core import schemas
from core.database import models, crud
from core.database.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
        db = SessionLocal()
        try:
                yield db
        finally:
                db.close()

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
        return crud.create_user(db=db, user=user)

@app.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
        users = crud.get_users(db, skip=skip, limit=limit)
        return users

@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
        db_user = crud.get_user(db, user_id=user_id)
        if db_user is None:
                raise HTTPException(status_code=404, detail="User not found")
        return db_user

@app.post("/events/", response_model=schemas.Event)
def create_event(event: schemas.EventCreate, db: Session = Depends(get_db)):
        return crud.create_event(db=db, event=event)

@app.get("/events/", response_model=List[schemas.Event])
def read_events(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
        events = crud.get_events(db, skip=skip, limit=limit)
        return events

@app.get("/events/{event_id}", response_model=schemas.Event)
def read_event(event_id: int, db: Session = Depends(get_db)):
        db_event = crud.get_event(db, event_id=event_id)
        if db_event is None:
                raise HTTPException(status_code=404, detail="Event not found")
        return db_event

@app.post("/participations/", response_model=schemas.Participation)
def create_participation(participation: schemas.ParticipationCreate, db: Session = Depends(get_db)):
        return crud.create_participation(db=db, participation=participation)

@app.get("/participations/", response_model=List[schemas.Participation])
def read_participations(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
        participations = crud.get_participations(db, skip=skip, limit=limit)
        return participations

@app.get("/participations/{participation_id}", response_model=schemas.Participation)
def read_participation(participation_id: int, db: Session = Depends(get_db)):
        db_participation = crud.get_participation(db, participation_id=participation_id)
        if db_participation is None:
                raise HTTPException(status_code=404, detail="Participation not found")
        return db_participation

@app.post("/user_ratings/", response_model=schemas.UserRatings)
def create_user_rating(user_rating: schemas.UserRatingsCreate, db: Session = Depends(get_db)):
        return crud.create_user_ratings(db=db, user_ratings=user_rating)

@app.get("/user_ratings/", response_model=List[schemas.UserRatings])
def read_user_ratings(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
        user_ratings = crud.get_user_ratings_list(db,skip=skip, limit=limit)
        return user_ratings

@app.get("/user_ratings/{user_ratings_id}", response_model=schemas.UserRatings)
def read_user_rating(user_ratings_id: int, db: Session = Depends(get_db)):
        db_user_rating = crud.get_user_ratings(db, user_ratings_id=user_ratings_id)
        if db_user_rating is None:
                raise HTTPException(status_code=404, detail="User rating not found")
        return db_user_rating



@app.get("/")
async def root():
        return {"message": "Hello World"}