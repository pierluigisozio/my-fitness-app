from django.urls import path
from . import views

urlpatterns = [
    path('users/registerByUserAndPassword', views.register_by_username_and_password, name='register_by_user_and_pass'),
    path('api/loginByUserAndPassword', views.login_by_username_and_password, name='login_by_user_and_pass'),
    path('api/logout', views.logout, name='logout')
]