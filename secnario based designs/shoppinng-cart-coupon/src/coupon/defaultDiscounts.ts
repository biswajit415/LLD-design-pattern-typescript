import { Product } from '../product/product';
import { CouponDecorator } from './decorator';

export class DefaultDiscountCoupon extends CouponDecorator {
  constructor(product: Product) {
    super(product);
  }

  public getPrice(): number {
    const price = this.product.getPrice();
    console.log(
      `Default Discount will be applied for ${
        this.product.name
      } ( ${this.product.getProductCategory()}) on price ->  ${price}`
    );
    return price - price * (10 / 100);
  }
}
