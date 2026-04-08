# Level 2 (FBV) — раскомментируй для тестирования
# from api.views.fbv import products_list, product_detail

# Level 3 (CBV) — раскомментируй для тестирования
# from api.views.cbv import ProductListAPIView, ProductDetailAPIView

# Level 4 (Mixins) — раскомментируй для тестирования
# from api.views.mixins import ProductListAPIView, ProductDetailAPIView

# Level 5 (Generics) — АКТИВЕН
from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)