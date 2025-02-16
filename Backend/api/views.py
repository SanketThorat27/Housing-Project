# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# import json
# from .models import RealEstateListings

# @csrf_exempt  # Disable CSRF for testing, remove in production
# def upload_property(request):
#     if request.method == "POST":
#         try:
#             data = json.loads(request.body)  # Parse JSON data

#             # Extract values from JSON
#             name = data.get("name")
#             location = data.get("location")
#             price = data.get("price")
#             description = data.get("description")

#             # Validate input
#             if not name or not location or not price or not description:
#                 return JsonResponse({"error": "All fields are required"}, status=400)

#             # Save to MongoDB
#             property_obj = RealEstateListings(name=name, location=location, price=price, description=description)
#             property_obj.save()

#             return JsonResponse({"message": "Property added successfully!"}, status=201)

#         except json.JSONDecodeError:
#             return JsonResponse({"error": "Invalid JSON format"}, status=400)
    
#     return JsonResponse({"error": "Only POST requests are allowed"}, status=405)

# from rest_framework import generics
# from .models import RealEstateListings
# from .serializers import PropertySerializer

# # ✅ List & Create Properties
# class PropertyListCreateView(generics.ListCreateAPIView):
#     queryset = RealEstateListings.objects.all()
#     serializer_class = PropertySerializer

# # ✅ Retrieve, Update & Delete a Property
# class PropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = RealEstateListings.objects.all()
#     serializer_class = PropertySerializer

# from rest_framework import generics
# from rest_framework.response import Response
# from rest_framework import status
# from bson import ObjectId  # Import ObjectId to handle MongoDB IDs
# from .models import RealEstateListings
# from .serializers import PropertySerializer

# # ✅ List & Create Properties
# class PropertyListCreateView(generics.ListCreateAPIView):
#     queryset = RealEstateListings.objects.all()
#     serializer_class = PropertySerializer

#     def create(self, request, *args, **kwargs):
#         response = super().create(request, *args, **kwargs)

#         # Convert ObjectId to string in the response
#         if isinstance(response.data.get('id'), ObjectId):
#             response.data['id'] = str(response.data['id'])

#         return Response(response.data, status=status.HTTP_201_CREATED)

# # ✅ Retrieve, Update & Delete a Property
# class PropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = RealEstateListings.objects.all()
#     serializer_class = PropertySerializer

#     def retrieve(self, request, *args, **kwargs):
#         response = super().retrieve(request, *args, **kwargs)

#         # Convert ObjectId to string in the response
#         if isinstance(response.data.get('id'), ObjectId):
#             response.data['id'] = str(response.data['id'])

#         return Response(response.data)

#     def update(self, request, *args, **kwargs):
#         response = super().update(request, *args, **kwargs)

#         # Convert ObjectId to string in the response
#         if isinstance(response.data.get('id'), ObjectId):
#             response.data['id'] = str(response.data['id'])

#         return Response(response.data)

#     def destroy(self, request, *args, **kwargs):
#         response = super().destroy(request, *args, **kwargs)
#         return Response({"message": "Property deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

from rest_framework import generics
from .models import RealEstateListings
from .serializers import PropertySerializer

# ✅ List & Create Properties
class PropertyListCreateView(generics.ListCreateAPIView):
    queryset = RealEstateListings.objects.all().order_by('id')  # ✅ Ensures proper ordering
    serializer_class = PropertySerializer

# ✅ Retrieve, Update & Delete a Property
class PropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealEstateListings.objects.all()
    serializer_class = PropertySerializer
    lookup_field = 'id'  # ✅ Use integer ID instead of ObjectId

