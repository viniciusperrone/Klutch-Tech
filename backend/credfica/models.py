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
    installment = models.IntegerField()
    installmentInterest = models.FloatField()
    installmentValue = models.FloatField()
    fullValue = models.FloatField()
    comission = models.FloatField()

    table = models.ForeignKey(RateTable, related_name="installments",
                              on_delete=models.CASCADE, blank=True, null=True)

    def __int__(self):
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
    cpf = models.IntegerField(unique=True)

    bank = models.ForeignKey(Bank, related_name="customers",
                             on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name


class Solicitation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    clientId = models.UUIDField()
    installmentId = models.IntegerField()
    rateTableId = models.UUIDField()
    installmentInterest = models.FloatField()
    installmentInterestValue = models.FloatField()
    cardName = models.CharField(max_length=255)
    cardNumber = models.IntegerField()
    expirationDate = models.CharField(max_length=10)
    cvc = models.IntegerField()
    desiredValue = models.IntegerField()
    totalLoan = models.FloatField()

    def __str__(self):
        return self.cardName
