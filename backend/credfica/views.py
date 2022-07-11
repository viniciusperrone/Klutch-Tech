from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
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
    def getAll(request):
        customers = Customer.objects.all()
        customers_serializer = CustomerSerialize(
            customers, many=True)
        return JsonResponse(customers_serializer.data, safe=False)
