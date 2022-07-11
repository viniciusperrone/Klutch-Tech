from django.contrib import admin

from credfica.models import Installments, RateTable

# Register your models here.

admin.site.register(RateTable)
admin.site.register(Installments)