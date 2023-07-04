from fastapi import APIRouter, HTTPException, Query

from .storage import get_products_storage
from .schema import ProductsSchema


router = APIRouter()


PRODUCTS_STORAGE = get_products_storage()

@router.get("/")
async def get_products() -> list[ProductsSchema]:
    return list(get_products_storage().values())

@router.get("/{order_id}")
async def get_customer(product_id: int) -> ProductsSchema:
    try:
        return PRODUCTS_STORAGE[product_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Product with ID={product_id} does not exist.")


