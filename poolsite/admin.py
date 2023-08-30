from django.contrib import admin
from .models import CustomUser, Pool, Participant, Winners

admin.site.register(CustomUser)
admin.site.register(Pool)
admin.site.register(Participant)
admin.site.register(Winners)