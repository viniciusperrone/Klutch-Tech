from django.urls import path
from django.urls.resolvers import URLPattern

from credfica.views import ClientApi, TableApi

rateTable = TableApi
clientApi = ClientApi

urlpatterns = [
    path('', rateTable.getAll),
    path('search/<int:cpf>', clientApi.getAll),
]
