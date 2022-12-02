from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from task_manager.utils import get_token, formulate_response
from tasks.models import Category, Task
from profiles.models import Profile
from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework import generics
from tasks.api.serializers import TaskSerializer, CategorySerializer


class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]


class TaskCRUD(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            task = get_object_or_404(Task, pk=pk)
        except Http404:
            response = formulate_response(
                type=404, message=f'No tasks with id {pk}')
            return Response(response, 404)

        response = formulate_response(task)

        return Response(response)

    def post(self, request):
        category = Category.objects.get(pk=int(request.data['category']))
        owner = Profile.objects.get(pk=int(request.data['owner']))
        del request.data['category'], request.data['owner']
        task = Task(**request.data)
        task.category = category
        task.owner = owner
        task.save()
        response = formulate_response(task)
        return Response(response)

    def patch(self, request, pk):
        task = Task.objects.filter(pk=pk)
        task.update(**request.data)
        task.save()
        response = formulate_response(task)
        return Response(response)

    def delete(self, request, pk):
        try:
            task = get_object_or_404(Task, pk=pk)
        except Http404:
            response = formulate_response(
                type=404, message=f'No tasks with id {pk}')
            return Response(response, 404)

        Task.objects.filter(pk=pk).delete()
        response = formulate_response(task)
        return Response(response)


class CategoryCRUD(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            category = get_object_or_404(Category, pk=pk)
        except Http404:
            response = formulate_response(obj=category,
                                          type=404, message=f'No category with id {pk}')
            return Response(response, 404)

        response = formulate_response(
            category, type=200, message=f'Successfully found category with id {category.pk}')

        return Response(response)

    def post(self, request):
        category = Category(**request.data)
        category.save()
        response = formulate_response(
            type=200, message=f'Successfully added category with id {category.pk}')
        return Response(response)

    def patch(self, request, pk):
        pass

    def delete(self, request, pk):
        try:
            category = get_object_or_404(Category, pk=pk)

        except Http404:
            response = formulate_response(
                type=404, message=f'No category with id {pk}')

            return Response(response)

        Category.objects.filter(pk=pk).delete()
        response = formulate_response(category)
        return Response(response)
