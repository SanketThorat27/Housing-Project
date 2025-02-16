# from django.urls import path
# from .views import upload_property
# # from .views import home , upload_property

# urlpatterns = [
#     # path('', home, name="home"),
#     path('upload/', upload_property, name='upload_property'),
# ]

# from django.urls import path
# from .views import PropertyListCreateView, PropertyDetailView

# urlpatterns = [
#     path('properties/', PropertyListCreateView.as_view(), name='property-list-create'),
#     path('properties/<int:pk>/', PropertyDetailView.as_view(), name='property-detail'),
# ]

from django.urls import path
from .views import PropertyListCreateView, PropertyDetailView

urlpatterns = [
    path("properties/", PropertyListCreateView.as_view(), name='property-list-create'),
    path("properties/<int:id>/", PropertyDetailView.as_view(), name='property-detail'),  # Integer ID
]

