import { IShipmentProduct } from '../interface/shipmentProduct.interface';

export abstract class ShipmentService {
  protected productImplementation: IShipmentProduct;
  constructor(productImplementation: IShipmentProduct) {
    this.productImplementation = productImplementation;
  }

  abstract calculateShipmentCost(weight: number, destination: string): number;
  abstract getDeliveryTime(destination: string): string;
}
