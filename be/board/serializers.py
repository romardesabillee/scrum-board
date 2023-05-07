from rest_framework import serializers
from .models import Board
from users.models import User

class BoardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Board
        fields = '__all__'
    
    def create(self, validated_data):
        return Board.objects.create(
            **validated_data, 
            user=self.context['request'].user
        )

