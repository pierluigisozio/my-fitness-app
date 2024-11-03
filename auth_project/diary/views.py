from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from . import models as m
from . import serializers as s


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def meal_list_create(request):
    if request.method == 'GET':
        meals = m.Meal.objects.filter(user=request.user)
        serializer = s.MealSerializer(meals, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = s.MealSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.data, status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def exercise_list_create(request):
    if request.method == 'GET':
        exercise = m.Exercise.objects.filter(user=request.user)
        serializer = s.ExerciseSerializer(exercise, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = s.ExerciseSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_progress_list_create(request):
    if request.method == 'GET':
        progress = m.UserProgress.objects.filter(user=request.user)
        serializer = s.UserProgressSerializer(progress, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = s.UserProgressSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
