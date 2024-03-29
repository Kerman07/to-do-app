from django.db import models
from django.contrib.auth.models import User


class Item(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()

    def __str__(self):
        return f"{self.content} by {self.author.username}"
    
