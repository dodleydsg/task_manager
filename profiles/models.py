from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager


class Profile(AbstractUser):
    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)
    profileImg = models.TextField(blank=True)
    email = models.EmailField('Email address', unique=True)
    username = None

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return f'THis is the profile of {self.first_name} {self.last_name}'
