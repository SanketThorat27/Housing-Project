from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Welcome to SmartHood API!"})