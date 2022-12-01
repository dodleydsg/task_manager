from django.db import models
from profiles.models import Profile
from django.utils import timezone


class Category(models.Model):
    title = models.CharField(max_length=250, unique=True)
    description = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class Task(models.Model):
    TASK_STATES = (('completed', 'Completed'),
                   ('pending', 'Pending'), ('recycled', 'Recycled'))

    state = models.CharField(
        max_length=10, choices=TASK_STATES, default='pending')
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='tasks')
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return f'This is task #{self.id} owned by {self.owner.username}'
