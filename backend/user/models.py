from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    points = models.IntegerField(default=0)

    class Meta:
        unique_together = ('username',)

    # Provide unique related_names for groups and user_permissions
    groups = None  # This will prevent the clash
    user_permissions = None  # This will prevent the clash

    def __str__(self):
        return self.username
