# from django.db import models

# Create your models here.
# from djongo import models
# from datetime import datetime
# from django.utils.timezone import now

# class RealEstateListings(models.Model):
#     name = models.CharField(max_length=255)
#     location = models.CharField(max_length=255, db_index=True)  # Indexed for faster queries
#     price = models.FloatField()
#     description = models.TextField(blank=True, null=True)
#     is_available = models.BooleanField(default=True)  # Availability status
#     created_at = models.DateTimeField(default=now, editable=False)
#     # created_at = models.DateTimeField(default=datetime.now)  # Default value added
#     updated_at = models.DateTimeField(auto_now=True)  # Timestamp for last update


#     class Meta:
#         db_table = "real_estate_data"  # Custom collection name

# from djongo import models
# from datetime import datetime
# from django.utils.timezone import now
# from bson import ObjectId

# class RealEstateListings(models.Model):
#     id = models.AutoField(primary_key=True)  # Auto-incrementing Integer ID
#     name = models.CharField(max_length=255)
#     location = models.CharField(max_length=255, db_index=True)  # Indexed for faster queries
#     price = models.FloatField()
#     description = models.TextField(blank=True, null=True)
#     is_available = models.BooleanField(default=True)  # Availability status
#     created_at = models.DateTimeField(default=now, editable=False)
#     updated_at = models.DateTimeField(auto_now=True)  # Timestamp for last update

#     class Meta:
#         db_table = "real_estate_data"  # Custom collection name

# from djongo import models
# from django.utils.timezone import now

# class RealEstateListings(models.Model):
#     id = models.IntegerField(primary_key=True)  # ✅ Ensure ID is an Integer (not ObjectId)
#     name = models.CharField(max_length=255)
#     location = models.CharField(max_length=255, db_index=True)  # ✅ Indexed for fast searches
#     price = models.FloatField()
#     description = models.TextField(blank=True, null=True)
#     is_available = models.BooleanField(default=True)
#     created_at = models.DateTimeField(default=now, editable=False)
#     updated_at = models.DateTimeField(auto_now=True)

#     def save(self, *args, **kwargs):
#         """
#         ✅ Manually handle auto-incrementing ID because MongoDB does not support AutoField.
#         """
#         if not self.id:  # Assign an ID only if it doesn’t exist
#             last_entry = RealEstateListings.objects.order_by('-id').first()
#             self.id = (last_entry.id + 1) if last_entry else 1  # Assign next available integer ID
#         super().save(*args, **kwargs)

#     class Meta:
#         db_table = "real_estate_data"  # ✅ Custom collection name
#         indexes = [
#             models.Index(fields=['id']),  # ✅ Index ID for faster queries
#             models.Index(fields=['location']),  # ✅ Index location for optimized lookups
#         ]

from djongo import models
from django.utils.timezone import now

# Counter Model to Auto-Increment IDs
class Counter(models.Model):
    name = models.CharField(max_length=50, unique=True)
    value = models.IntegerField(default=0)

    class Meta:
        db_table = "counters"

# Main Real Estate Model
class RealEstateListings(models.Model):
    id = models.IntegerField(primary_key=True)  # Auto-incrementing Integer ID
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, db_index=True)
    price = models.FloatField()
    description = models.TextField(blank=True, null=True)
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "real_estate_data"




