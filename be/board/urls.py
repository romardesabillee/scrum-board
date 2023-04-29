from django.urls import path
from .views import board_details, board_actions

urlpatterns = [
    path('details/', board_details),
    path('details/<int:pk>/', board_details),
    path('create/', board_actions),
]
