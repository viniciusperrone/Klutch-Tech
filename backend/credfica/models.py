from django.db import models
from uuid import uuid4

# Create your models here.

class RateTable(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid4)
  name = models.CharField(max_length=255)
  created_at = models.DateField(auto_now_add=True)

  def __str__(self):
    return self.name

class Installments(models.Model):
  installments = models.IntegerField()
  installmentInterest = models.FloatField()
  installmentValue = models.FloatField()
  fullValue = models.FloatField()
  comission = models.FloatField()
  table = models.ForeignKey("RateTable", on_delete=models.CASCADE)

  def __str__(self):
    return self.installments

class Bank(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid4)
  label = models.CharField(max_length=500)
  accountTypeLabel = models.CharField(max_length=255)
  accountNumber = models.IntegerField()

  def __str__(self):
    return self.label

class Customer(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid4)
  name = models.CharField(max_length=500)
  phone = models.IntegerField()
  cpf = models.IntegerField()
  bank = models.ForeignKey("Bank", on_delete=models.CASCADE)

  def __str__(self):
    return self.name