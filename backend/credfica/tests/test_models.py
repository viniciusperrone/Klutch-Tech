from django.test import TestCase
from credfica.models import Bank, Customer, Installments, RateTable

# Create your tests here.


class RateTableTest(TestCase):

    def testCreateRateTable(self):
        rateTable = RateTable.objects.create(
            name="Test Table"
        )

        self.assertEqual(str(rateTable), 'Test Table')


class BankTest(TestCase):

    def testCreateBank(self):
        bank = Bank.objects.create(
            label="Test Bank",
            accountTypeLabel="Credit",
            accountNumber=9090
        )

        self.assertEqual(str(bank), 'Test Bank')


class InstallmentsTest(TestCase):

    def testCreateInstallments(self):

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

        self.assertEqual(str(installment), 'Test Table - 1')


class CustomerTest(TestCase):

    def testCreateCustomer(self):
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

        self.assertEqual(str(customer), 'Test Customer')
