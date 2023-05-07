from django.urls import path
from .views import login, getUser

urlpatterns = [
    path('login/', login),
    path('user/', getUser),
]
