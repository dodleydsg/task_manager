from django.urls import path
from . import views

app_name = 'tasks'

urlpatterns = [
    path('tasks/', views.TaskList.as_view(), name='task_list'),
    path('categories/', views.CategoryList.as_view(), name='category_list'),
    path('task/', views.TaskCRUD.as_view(), name='task_create'),
    path('task/<pk>/', views.TaskCRUD.as_view(),
         name='task_read_update_delete'),
    path('category/', views.CategoryCRUD.as_view(), name='category_create'),
    path('category/<pk>/', views.CategoryCRUD.as_view(),
         name='category_read_update_delete'),
]
