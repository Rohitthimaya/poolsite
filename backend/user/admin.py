from django.contrib import admin
from .models import CustomUser

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'password', 'points')


admin.site.register(CustomUser, UserAdmin)

