from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Integer, String, DateTime
from sqlalchemy.orm import relationship

from .database import Base

class Users(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    last_name = Column(String)
    username = Column(String, unique=True, index=True)
    password_hash = Column(String)

    # events = relationship("Events", back_populates="creator")
    # participate = relationship("Participation", back_populates="user")
    # user_ratings_rater = relationship("UserRatings", back_populates="rater")
    # user_ratings_ratee = relationship("UserRatings", back_populates="ratee")

class Events(Base):
    __tablename__ = "events"

    event_id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    location = Column(String)
    description = Column(String)
    date_time = Column(DateTime)
    duration = Column(Integer)
    skill_level = Column(String)
    sports = Column(String)
    creator_id = Column(Integer, ForeignKey("users.user_id"))

    # creator = relationship("Users", back_populates="events")
    # participants = relationship("Participation", back_populates="event")

class Participation(Base):
    __tablename__ = "participation"

    participation_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    event_id = Column(Integer, ForeignKey("events.event_id"))

    # event = relationship("Events", back_populates="participants")
    # user = relationship("Users", back_populates="participate")

class UserRatings(Base):
    __tablename__ = "user_ratings"

    user_rating_id = Column(Integer, primary_key=True, index=True)
    rater_id = Column(Integer, ForeignKey("users.user_id"))
    ratee_id = Column(Integer, ForeignKey("users.user_id"))
    rating = Column(Integer)

    # rater = relationship("Users", back_populates="user_ratings_rater")
    # ratee = relationship("Users", back_populates="user_ratings_ratee")