from functools import lru_cache

from .schema import Product

ProductStorageType = dict[int, Product]

PRODUCTS_STORAGE: ProductStorageType = {}


@lru_cache(maxsize=1)
def get_orders_storage() -> ProductStorageType:
    return PRODUCTS_STORAGE
