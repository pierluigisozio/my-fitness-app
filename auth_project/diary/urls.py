from django.urls import path
from . import views

urlpatterns = [
    path('meals/', views.meal_list_create, name='meal_list_create'),
    path('exercises/', views.exercise_list_create, name='exercise_list_create'),
    path('progress/', views.user_progress_list_create, name='user_progress_list_create'),
]
