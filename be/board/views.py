from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .serializers import BoardSerializer, Board


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def board_details(request, **kwargs):
    board = None
    if 'pk' in kwargs:
        board = BoardSerializer(Board.objects.get(pk=kwargs['pk']), many=False).data
    else:
        board = BoardSerializer(
            Board.objects.filter(user__email=request.user.email), 
            many=True
        ).data

    return Response(board)


@api_view(['POST'])
def board_actions(request):
    serializer = None
    if request.method == 'POST':
        # board = Board.objects.create(
        #     title=request.data['title'],
        #     description=request.data['description'],
        serializer = BoardSerializer(
            data=request.data, 
            context={'request': request}
        ) 
        if serializer.is_valid(raise_exception=True):
            serializer.save()

    return Response(serializer.data)