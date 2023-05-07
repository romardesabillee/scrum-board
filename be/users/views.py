from django.shortcuts import render
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer
from .models import User
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
def login(request):
    try: 
        user = authenticate(
            request=request, 
            email=request.data.get('email'),
            password=request.data.get('password')
        )

        return Response({ 'token': user.get_token().key }, status=200)
    except Exception as e:
        return Response({ 'error': 'Invalid credentials' }, status=401)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUser(request):
    current_user = User.objects.get(id=request.user.id)
    serializer = UserSerializer(current_user, many=False)
    return Response(serializer.data)