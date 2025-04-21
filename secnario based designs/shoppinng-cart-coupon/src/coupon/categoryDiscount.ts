import { Category } from '../product/categories';
import { Product } from '../product/product';
import { CouponDecorator } from './decorator';

export class CategoryDiscount extends CouponDecorator {
  constructor(product: Product) {
    super(product);
  }

  public getPrice(): number {
    const price = this.product.getPrice();
    if (this.product.getProductCategory() === Category.GROCERY) {
      console.log(
        `Category Discount will be applied for ${
          this.product.name
        } ( ${this.product.getProductCategory()}) on price ->  ${price}`
      );
      return price - price * (15 / 100);
    } else {
      console.warn(
        `Category Discount will not be applied for ${
          this.product.name
        } ( ${this.product.getProductCategory()}) on price ->  ${price}`
      );
    }
    return this.product.getPrice();
  }
}
