from rest_framework import serializers
from ..models import Profile


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        exclude = ['password', 'is_superuser',
                   'groups', 'date_joined', 'is_staff', 'is_active', 'last_login', 'user_permissions']
