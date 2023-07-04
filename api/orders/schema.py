from enum import Enum

from pydantic import BaseModel

class OrdersSchema(BaseModel):
    number: int
    name: str
    surname: str
    email: str

    class Config:
        schema_extra = {
            "example": {
                "number": "20030040302112",
                "name": "Jan",
                "surname": "Kowalski",
                "email": "jan.kowalski@example.com",
            }
        }

class Customer(OrdersSchema):
    id: int



# class StudentCreateSchema(BaseModel):
#     first_name: str
#     last_name: str

#     class Config:
#         schema_extra = {
#             "example": {
#                 "first_name": "Zbyszek",
#                 "last_name": "Kieliszek",
#             }
#         }


# class StudentUpdateSchema(BaseModel):
#     first_name: str | None
#     last_name: str | None

#     class Config:
#         schema_extra = {
#             "example": {
#                 "first_name": "Zbysiu",
#             }
#         }


# class Student(StudentCreateSchema):
#     id: int


# class Mark(float, Enum):
#     BARDZO_DOBRY = 5.0
#     DOBRY_PLUS = 4.5
#     DOBRY = 4.0
#     DOSTATECZNY_PLUS = 3.5
#     DOSTATECZNY = 3.0
#     NIEDOSTATECZNY = 2.0