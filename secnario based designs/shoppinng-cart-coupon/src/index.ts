import { ShoppingCartProducts } from './cart/shpppingCart';
import { ElectronicItem, GroceryItem } from './product/items';

const grocery = new GroceryItem('Milk', 100);
const electronic = new ElectronicItem('Laptop', 100);

const cart = new ShoppingCartProducts();

cart.addToCart(grocery);
cart.addToCart(electronic);

console.log(cart.getTotalPrice());
