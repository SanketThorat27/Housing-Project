from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Property

@csrf_exempt  # Disable CSRF for testing, remove in production
def upload_property(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)  # Parse JSON data

            # Extract values from JSON
            name = data.get("name")
            location = data.get("location")
            price = data.get("price")
            description = data.get("description")

            # Validate input
            if not name or not location or not price or not description:
                return JsonResponse({"error": "All fields are required"}, status=400)

            # Save to MongoDB
            property_obj = Property(name=name, location=location, price=price, description=description)
            property_obj.save()

            return JsonResponse({"message": "Property added successfully!"}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)
    
    return JsonResponse({"error": "Only POST requests are allowed"}, status=405)
