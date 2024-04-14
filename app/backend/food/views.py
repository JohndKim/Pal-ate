from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .AI_Image_Analysis.classify_food import query
from .Find_Information.findInfo import get_all

from rest_framework import status

# Create your views here.
@api_view(['POST'])
def predict(request):
    if 'photo' in request.FILES:
        image = request.FILES.get('photo')
        highest_prediction = query(image)[0]
        return Response(get_all(highest_prediction['label']))
    else:
        return Response({'error': 'No photo found in request'}, status=status.HTTP_400_BAD_REQUEST)

