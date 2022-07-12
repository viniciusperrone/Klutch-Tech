from asyncio.windows_events import NULL
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from django.shortcuts import render
from django.db import models

from credfica.models import Customer, Installments, RateTable, Solicitation
from credfica.serializers import CustomerSerialize, InstallmentsSerialize, RateTableSerialize, SolicitationSerialize
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
        customerData = JSONParser().parse(request)
        customer = Customer.objects.get(cpf=customerData['cpf'])
        if customer is NULL:
            return JsonResponse('Customer not exist!', safe=False, status=401)
        customer_serializer = CustomerSerialize(customer)

        return JsonResponse(customer_serializer.data, safe=False, status=200)


class SolicitationApi(APIView):
    @csrf_exempt
    def sendRequest(request):
        sendRequestData = JSONParser().parse(request)
        customer = Customer.objects.get(id=sendRequestData['clientId'])
        if customer is NULL:
            return JsonResponse('Customer not exist!', safe=False, status=401)

        installment = Installments.objects.get(
            id=sendRequestData['installmentId'])
        if installment is NULL:
            return JsonResponse('Installment not exist!', safe=False, status=401)

        table = RateTable.objects.get(id=sendRequestData['rateTableId'])
        if table is NULL:
            return JsonResponse('Table not exist!', safe=False, status=401)

        solicitation_serializer = SolicitationSerialize(data=sendRequestData)

        print(solicitation_serializer)
        if solicitation_serializer.is_valid():
            solicitation_serializer.save(
                customer=customer, installments=installment, table=table)
            return JsonResponse(solicitation_serializer.data, safe=False, status=200)
        return JsonResponse('Failed to make request', safe=False, status=500)
