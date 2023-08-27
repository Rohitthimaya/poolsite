from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True)
    points = models.IntegerField(default=0)

    def __str__(self):
        return self.username

class Pool(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('finished', 'Finished'),
    ]

    name = models.CharField(max_length=100)
    ticket_cost = models.DecimalField(max_digits=10),
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return self.name

class Participant(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    pool = models.ForeignKey(Pool, on_delete=models.CASCADE)
    entering_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Participant {self.participant_id}"

class Winners(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    pool = models.ForeignKey(Pool, on_delete=models.CASCADE)
    winning_date = models.DateTimeField()

    def __str__(self):
        return f"Winner {self.winner_id}"