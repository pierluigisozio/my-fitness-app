from rest_framework import serializers
from . import models as m


class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Meal
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Exercise
        fields = '__all__'


class UserProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.UserProgress
        fields = '__all__'
