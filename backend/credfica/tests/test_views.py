import json
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from credfica.models import Bank, Customer, Installments, RateTable
from credfica.serializers import RateTableSerialize, CustomerSerialize, SolicitationSerialize


class GetAllTableTestCase(APITestCase):

    list_url = reverse('all')

    def testFindAllTable(self):
        response = self.client.get(self.list_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)


class FindCustomerByCpfTestCase(APITestCase):
    customer_url = reverse('customer')

    def testFindCustomer(self):
        bank = Bank.objects.create(
            label="Test Bank",
            accountTypeLabel="Credit",
            accountNumber=9090
        )

        customer = Customer.objects.create(
            name='Test Customer',
            phone=9999999999,
            cpf='999.999.999-99',
            bank=bank,
        )

        data = {
            "cpf": '999.999.999-99'
        }

        request = self.client.post(self.customer_url, data)

        self.assertEqual(request.status_code, status.HTTP_200_OK)
        self.assertEqual(str(customer.cpf), data['cpf'])


class CreateSolicitationTestCase(APITestCase):
    solicitation_url = reverse('send-request')

    def testcreateSolicitation(self):
        rateTable = RateTable.objects.create(
            name="Test Table"
        )

        installment = Installments.objects.create(
            installment=1,
            installmentInterest=1.5,
            installmentValue=1,
            fullValue=1,
            comission=0.5,
            table=rateTable,
        )

        bank = Bank.objects.create(
            label="Test Bank",
            accountTypeLabel="Credit",
            accountNumber=9090
        )

        customer = Customer.objects.create(
            name='Test Customer',
            phone=9999999999,
            cpf='999.999.999-99',
            bank=bank,
        )

        data = {
            "clientId": str(customer.id),
            "installmentId": str(installment.id),
            "rateTableId": str(rateTable.id),
            "installmentInterest": 1.5,
            "installmentInterestValue": 1,
            "cardName": "Test A Card",
            "cardNumber": 321232,
            "expirationDate": "99/99/99",
            "cvc": 321,
            "desiredValue": 1,
            "totalLoan": 1
        }

        request = self.client.post(self.solicitation_url, data)

        self.assertEqual(request.status_code, status.HTTP_200_OK)
