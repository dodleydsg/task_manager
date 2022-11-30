from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from ..models import Profile
from django.contrib.auth.hashers import make_password, check_password
from profiles.models import Profile
from django.shortcuts import get_object_or_404
from ...task_manager.utils import get_token


class ProfileCreateView(APIView):

    permission_classes = [AllowAny, ]

    def post(self, request):
        password = request.data['password']
        del request.data['password']
        profile = Profile(**request.data)
        profile.password = make_password(password)
        profile.save()

        token = get_token(profile)
        return Response(token)


class ProfileControlView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        profile = Profile.objects.get(pk=pk)
        content = {
            'id': pk,
            'first_name': profile.first_name,
            'last_name': profile.last_name,
            'email': profile.email,
        }
        return Response(content)

    def patch(self, request, pk):
        profile = Profile.objects.get(pk=pk)
        profile.first_name = request.data['first_name']
        profile.last_name = request.data['last_name']
        profile.save()
        content = {
            'id': pk,
            'first_name': profile.first_name,
            'last_name': profile.last_name,
            'email': profile.email,
        }
        return Response(content)

    def put(self, request, pk):
        content = {'message': 'Supposed to update all details'}
        return Response(content)

    def delete(self, request, pk):
        content = {'message': 'Supposed to remove a user from the system'}
        return Response(content)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        password = request.data['password']
        del request.data['password']

        profile = get_object_or_404(
            Profile, email=request.data['email'])

        if not check_password(password, profile.password):
            content = {
                "error":
                {
                    "message": 'Password doesn\'t match any records'
                }
            }
            return Response(content)

        token = get_token(profile)

        content = {'token': token,
                   'first_name': profile.first_name,
                   'last_name': profile.last_name,
                   'msg': 'Successfully signed in'}
        return Response(content)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        content = {'message': 'Successfully logged out'}

        return Response(content)
