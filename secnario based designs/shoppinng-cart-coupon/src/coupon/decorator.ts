import { Product } from '../product/product';

export abstract class CouponDecorator extends Product {
  protected product: Product;

  constructor(product: Product) {
    super(product.name, product.actualPrice, product.productCategory);
    this.product = product;
  }

  public abstract getPrice(): number;
}
