from django.urls import path
from . import views

app_name = 'profiles'


urlpatterns = [
    path('profile/<pk>/', views.ProfileControlView.as_view(), name='profile_control'),
    path('profile/', views.ProfileCreateView.as_view(), name='profile_create'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout')
]
