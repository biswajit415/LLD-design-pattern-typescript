import { Checkout } from './context/checkout';
import { CreditCardPayment } from './strategy/CreditCardPayment.strategy';
import { CryptoPayment } from './strategy/CryptoPayment.strategy';
import { PayPalPayment } from './strategy/PaypalPayment.strategy';

const checkout = new Checkout(new CreditCardPayment('1234-5678-9012-3456'));

console.log(checkout.processPayment(100)); // Output: Paid $100 with Credit Card ending in 3456

checkout.setPaymentStrategy(new PayPalPayment('user@example.com'));
console.log(checkout.processPayment(200)); // Output: Paid $200 via PayPal for user@example.com

checkout.setPaymentStrategy(new CryptoPayment('0x1234abcd...'));
console.log(checkout.processPayment(300)); // Output: Paid
