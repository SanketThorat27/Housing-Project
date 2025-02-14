from django.urls import path
from .views import upload_property
# from .views import home , upload_property

urlpatterns = [
    # path('', home, name="home"),
    path('upload/', upload_property, name='upload_property'),
]

