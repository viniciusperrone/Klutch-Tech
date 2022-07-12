
from rest_framework import serializers
from .models import Bank, Customer, Installments, RateTable, Solicitation


class InstallmentsSerialize(serializers.ModelSerializer):

    class Meta:
        model = Installments
        fields = '__all__'


class RateTableSerialize(serializers.ModelSerializer):

    installments = InstallmentsSerialize(many=True, read_only=True)

    class Meta:
        model = RateTable
        fields = '__all__'


class BankSerialize(serializers.ModelSerializer):

    class Meta:
        model = Bank
        fields = '__all__'


class CustomerSerialize(serializers.ModelSerializer):

    bank = BankSerialize(read_only=True)

    class Meta:
        model = Customer
        fields = '__all__'


class SolicitationSerialize(serializers.ModelSerializer):

    customer = CustomerSerialize(read_only=True)
    installments = InstallmentsSerialize(read_only=True)
    table = RateTableSerialize(read_only=True)

    class Meta:
        model = Solicitation
        fields = '__all__'
