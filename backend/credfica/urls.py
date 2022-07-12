from django.urls import path
from django.urls.resolvers import URLPattern

from credfica.views import ClientApi, SolicitationApi, TableApi

rateTable = TableApi
clientApi = ClientApi
solicitation = SolicitationApi

urlpatterns = [
    path('', rateTable.getAll),
    path('search', clientApi.getAll),
    path('send-request', solicitation.sendRequest),
]
