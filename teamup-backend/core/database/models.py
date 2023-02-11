from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

class Users(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    last_name = Column(String)
    username = Column(String, unique=True, index=True)
    password_hash = Column(String)

class Events(Base):
    __tablename__ = "events"

    event_id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    date_time = Column(DateTime)
    duration = Column(Integer)
    skill_level = Column(String)
    sports = Column(String)
    creator_id = Column(Integer, ForeignKey("users.user_id"))

class Participation(Base):
    __tablename__ = "participation"

    participation_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    event_id = Column(Integer, ForeignKey("events.event_id"))

class UserRatings(Base):
    __tablename__ = "user_ratings"

    user_rating_id = Column(Integer, primary_key=True, index=True)
    rater_id = Column(Integer, ForeignKey("users.user_id"))
    ratee_id = Column(Integer, ForeignKey("users.user_id"))
    rating = Column(Integer)