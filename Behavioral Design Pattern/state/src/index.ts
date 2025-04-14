import { Order } from './context/order';

const order = new Order('ORDER-001');
order.process();
order.ship();
order.deliver();
order.cancel();
order.process();
