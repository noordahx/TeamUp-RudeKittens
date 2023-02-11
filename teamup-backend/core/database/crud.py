from sqlalchemy.orm import Session

from . import models, schemas

def get_user(db: Session, user_id: int):
    return db.query(models.Users).filter(models.Users.user_id == user_id).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Users).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.Users(
        name=user.name,
        last_name=user.last_name,
        username=user.username,
        password_hash=user.password,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_event(db: Session, event_id: int):
    return db.query(models.Events).filter(models.Events.event_id == event_id).first()

def get_events(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Events).offset(skip).limit(limit).all()

def create_event(db: Session, event: schemas.EventCreate, creator_id: int):
    db_event = models.Events(
        name=event.name,
        location=event.location,
        description=event.description,
        date_time=event.date_time,
        duration=event.duration,
        skill_level=event.skill_level,
        sports=event.sports,
        creator_id=creator_id,
    )
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event

def get_participation(db: Session, participation_id: int):
    return db.query(models.Participations).filter(models.Participations.participation_id == participation_id).first()

def get_participations(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Participations).offset(skip).limit(limit).all()

def create_participation(db: Session, participation: schemas.ParticipationCreate):
    db_participation = models.Participations(
        user_id=participation.user_id,
        event_id=participation.event_id,
    )
    db.add(db_participation)
    db.commit()
    db.refresh(db_participation)
    return db_participation

def get_user_ratings(db: Session, user_ratings_id: int):
    return db.query(models.UserRatings).filter(models.UserRatings.user_ratings_id == user_ratings_id).first()

def get_user_ratings_list(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.UserRatings).offset(skip).limit(limit).all()

def create_user_ratings(db: Session, user_ratings: schemas.UserRatingsCreate):
    db_user_ratings = models.UserRatings(
        rater_id=user_ratings.rater_id,
        ratee_id=user_ratings.ratee_id,
        rating=user_ratings.rating,
    )
    db.add(db_user_ratings)
    db.commit()
    db.refresh(db_user_ratings)
    return db_user_ratings

