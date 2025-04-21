export abstract class Product {
  name: string;
  actualPrice: number;
  productCategory: string;

  constructor(name: string, actualPrice: number, productCategory: string) {
    this.name = name;
    this.actualPrice = actualPrice;
    this.productCategory = productCategory;
  }
  public getProductCategory(): string {
    return this.productCategory;
  }

  //needs to be implemented
  public abstract getPrice(): number;
}
