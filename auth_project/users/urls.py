from django.urls import path
from . import views

urlpatterns = [
    path('registerUsername/', views.register_by_username_and_password, name='register_by_user_and_pass'),
    path('loginUsername/', views.login_by_username_and_password, name='login_by_user_and_pass'),
    path('logout/', views.logout, name='logout')
]