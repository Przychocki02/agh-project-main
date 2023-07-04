from fastapi import APIRouter, HTTPException, Query

from .storage import get_orders_storage
from .schema import OrdersSchema


router = APIRouter()


ORDERS_STORAGE = get_orders_storage()

@router.get("/")
async def get_orders() -> list[OrdersSchema]:
    return list(get_orders_storage().values())

@router.get("/{order_id}")
async def get_customer(order_id: int) -> OrdersSchema:
    try:
        return ORDERS_STORAGE[order_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Order with ID={order_id} does not exist.")



