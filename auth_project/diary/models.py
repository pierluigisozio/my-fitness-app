from django.contrib.auth.models import User
from django.db import models


class Meal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="meals")
    title = models.CharField(max_length=100)
    calories = models.PositiveIntegerField()
    date = models.DateField()

    def __str__(self):
        return f"{self.title} ({self.calories} kcal)"


class Exercise(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="exercise")
    name = models.CharField(max_length=100)
    duration_minutes = models.PositiveIntegerField()
    calories_burned = models.PositiveIntegerField()
    date = models.DateField()

    def __str__(self):
        return f"{self.name} - {self.duration_minutes} min"


class UserProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="progress")
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    body_fat_percentage = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    date = models.DateField()

    def __str__(self):
        return f"Progress of {self.user.username} on {self.date}"
