import { DefaultDiscountCoupon } from '../coupon/defaultDiscounts';
import { Product } from '../product/product';
import { CategoryDiscount } from '../coupon/categoryDiscount';

export class ShoppingCartProducts {
  public products: Product[] = [];

  addToCart(product: Product) {
    const priceModifiedProduct = new CategoryDiscount(
      new DefaultDiscountCoupon(product)
    );
    this.products.push(priceModifiedProduct);
  }

  getTotalPrice(): { withDiscount: number; withOutDiscount: number } {
    let withDiscount = 0;
    let withOutDiscount = 0;

    this.products.forEach((item) => {
      withDiscount += item.getPrice();
      withOutDiscount += item.actualPrice;
      console.log('-----------------------------------');
    });

    return {
      withDiscount,
      withOutDiscount,
    };
  }
}
