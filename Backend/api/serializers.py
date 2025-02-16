# from rest_framework import serializers
# from .models import RealEstateListings

# class PropertySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = RealEstateListings
#         fields = '__all__'
#         extra_kwargs = {'description': {'required': False}}  # ✅ Fix here

# from rest_framework import serializers
# from .models import RealEstateListings
# from bson import ObjectId  # ✅ Import ObjectId for handling MongoDB IDs

# class PropertySerializer(serializers.ModelSerializer):
#     id = serializers.CharField(read_only=True)  # ✅ Convert ObjectId to string

#     class Meta:
#         model = RealEstateListings
#         fields = '__all__'
#         extra_kwargs = {'description': {'required': False}}  # ✅ Fix here

#     def to_representation(self, instance):
#         """Ensure ObjectId is converted to string before returning response."""
#         ret = super().to_representation(instance)
#         ret['id'] = str(instance.id)  # ✅ Convert ObjectId to string
#         return ret

# from rest_framework import serializers
# from .models import RealEstateListings
# from bson import ObjectId 

# class PropertySerializer(serializers.ModelSerializer):
#     id = serializers.SerializerMethodField()  # Explicitly handle the ID conversion

#     def get_id(self, obj):
#         return str(obj.id) if isinstance(obj.id, ObjectId) else obj.id
#     class Meta:
#         model = RealEstateListings
#         fields = '__all__'
#         extra_kwargs = {'description': {'required': False}}  # ✅ Allow optional description

# from rest_framework import serializers
# from .models import RealEstateListings

# class PropertySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = RealEstateListings
#         fields = '__all__'  # No need for explicit `id` field, Django handles it as an integer

from rest_framework import serializers
from .models import RealEstateListings, Counter

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = RealEstateListings
        fields = '__all__'

    def create(self, validated_data):
        # Fetch the Counter Document
        counter, created = Counter.objects.get_or_create(name="property_id")
        counter.value += 1
        counter.save()

        # Assign Auto-Incremented ID
        validated_data["id"] = counter.value
        return super().create(validated_data)



