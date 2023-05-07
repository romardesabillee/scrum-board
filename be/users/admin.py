from django.contrib import admin
from django.contrib.auth.models import User, Group
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email',)

admin.site.unregister(Group)