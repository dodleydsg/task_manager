from django.urls import path, include

urlpatterns = [
    path('api/', include('profiles.api.urls', namespace='profile_api')),
    path('api/', include('tasks.api.urls', namespace='task_api')),
]
