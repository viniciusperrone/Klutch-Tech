from django.db import models
from uuid import uuid4

# Create your models here.

class RateTable(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid4)
  name = models.CharField(max_length=255)
  created_at = models.DateField(auto_now_add=True)

  def __str__(self):
    return self.name
