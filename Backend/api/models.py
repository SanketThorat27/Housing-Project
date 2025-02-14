# from django.db import models

# Create your models here.
from djongo import models

class Property(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()

    class Meta:
        db_table = "real_estate_listings"  # Custom collection name

