import { Investor } from './observer/stock.observer';
import { StockExchange } from './subject/stockMarket.subject';

const stockExchange = new StockExchange();

const investor1 = new Investor('Warren Buffett');
const investor2 = new Investor('Elon Musk');

stockExchange.registerObserver(investor1);
stockExchange.registerObserver(investor2);

// Simulate stock price changes
stockExchange.setStockPrice('AAPL', 180); // Both investors get notified
stockExchange.setStockPrice('TSLA', 950); // Both investors get notified
