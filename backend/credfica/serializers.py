
from rest_framework import serializers
from .models import Installments, RateTable

class RateTableSerialize(serializers.ModelSerializer):
  class Meta:
      model = RateTable
      fields = '__all__'

class InstallmentsSerialize(serializers.ModelSerializer):
  class Meta:
      model = Installments
      fields = '__all__'