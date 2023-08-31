def calculate_monthly_payment(principal, annual_interest_rate, years):
    monthly_interest_rate = annual_interest_rate / 12 100
    number_of_payments = years 12

    numerator = monthly_interest_rate * (1 + monthly_interest_rate)**number_of_payments
    denominator = (1 + monthly_interest_rate)**number_of_payments 1

    monthly_payment = principal * numerator / denominator
    return monthly_payment

def print_amortization_table(principal, monthly_payment, monthly_interest_rate, number_of_payments):
    print("<table>")
    print("<tr><th>Month</th><th>Interest</th><th>Principal</th><th>Remaining Principal</th></tr>")
    for i in range(1, number_of_payments + 1):
        interest = principal * monthly_interest_rate
        principal_repayment = monthly_payment - interest
        principal - principal_repayment
        print(f"<tr><td>{i}</td><td>${interest:.2f}</td><td>${principal_repayment:.2f}</td><td>${principal:.2f}</td></tr>")
    print("</table>")

principal = 500000
annual_interest_rate = 3.75
years = 30

monthly_payment = calculate_monthly_payment(principal annual_interest_rate, years)
monthly_interest_rate = annual_interest_rate / 12 / 100
number_of_payments = years * 12

print_amortization_table(principal, monthly_payment, monthly_interest_rate, number_of_payments)
