from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import JsonResponse
from django.shortcuts import render

from credfica.models import Installments, RateTable
from credfica.serializers import InstallmentsSerialize, RateTableSerialize
# Create your views here.


class TableApi(APIView):
    @csrf_exempt
    def getAll(request):
        tables = RateTable.objects.all()
        tables_serializer = RateTableSerialize(tables, many=True)
        return JsonResponse(tables_serializer.data, safe=False)

    def findInstallments(request, id):
        installments = RateTable.objects.filter(table__table=id)
        print(installments)
        installments_serializer = InstallmentsSerialize(
            installments, many=True)
        return JsonResponse(installments_serializer.data, safe=False)
