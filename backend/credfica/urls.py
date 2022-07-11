from django.urls import path
from django.urls.resolvers import URLPattern

from credfica.views import TableApi

rateTable = TableApi

urlpatterns = [
    path('table/', rateTable.getAll),
    path('table/<str:id>', rateTable.findInstallments)
]
