from django.contrib import admin

from credfica.models import Bank, Customer,Installments, RateTable

# Register your models here.

admin.site.register(RateTable)
admin.site.register(Installments)
admin.site.register(Bank)
admin.site.register(Customer)