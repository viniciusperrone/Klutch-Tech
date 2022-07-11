from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from django.shortcuts import render
from django.db import models

from credfica.models import Customer, Installments, RateTable
from credfica.serializers import CustomerSerialize, InstallmentsSerialize, RateTableSerialize
# Create your views here.


class TableApi(APIView):
    @csrf_exempt
    def getAll(request):
        tables = RateTable.objects.all().prefetch_related(
            models.Prefetch(
                "installments", queryset=Installments.objects.all())
        )
        tables_serializer = RateTableSerialize(tables, many=True)
        return JsonResponse(tables_serializer.data, safe=False)


class ClientApi(APIView):
    @csrf_exempt
    def getAll(request, cpf):
        customer = Customer.objects.get(cpf=cpf)
        customer_serializer = CustomerSerialize(
            customer)
        return JsonResponse(customer_serializer.data, safe=False)
