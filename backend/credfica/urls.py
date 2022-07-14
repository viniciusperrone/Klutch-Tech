from django.urls import path
from django.urls.resolvers import URLPattern

from credfica.views import ClientApi, SolicitationApi, TableApi

rateTable = TableApi
clientApi = ClientApi
solicitation = SolicitationApi

urlpatterns = [
    path('', rateTable.getAll, name="all"),
    path('search', clientApi.findCustomer, name="customer"),
    path('send-request', solicitation.sendRequest, name="send-request"),
]
