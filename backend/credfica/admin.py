from django.contrib import admin

from credfica.models import Bank, Customer, Installments, RateTable, Solicitation

# Register your models here.

admin.site.register(RateTable)
admin.site.register(Installments)
admin.site.register(Bank)
admin.site.register(Customer)
admin.site.register(Solicitation)
