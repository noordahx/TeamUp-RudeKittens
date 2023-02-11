from typing import List, Union

from pydantic import BaseModel, Field


class UserBase(BaseModel):
    name: str
    last_name: str
    username: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    user_id: int
    
    class Config:
        orm_mode = True

class EventBase(BaseModel):
    name: str
    location: str
    description: str
    date_time: datetime.datetime
    duration: int
    skill_level: str
    sports: str

class EventCreate(EventBase):
    pass

class Event(EventBase):
    event_id: int
    creator_id: int

    class Config:
        orm_mode = True

class ParticipationBase(BaseModel):
    user_id: int
    event_id: int

class ParticipationCreate(ParticipationBase):
    pass

class Participation(ParticipationBase):
    participation_id: int

    class Config:
        orm_mode = True

class UserRatingsBase(BaseModel):
    rater_id: int
    ratee_id: int
    rating: int

class UserRatingsCreate(UserRatingsBase):
    pass

class UserRatings(UserRatingsBase):
    user_ratings_id: int

    class Config:
        orm_mode = True