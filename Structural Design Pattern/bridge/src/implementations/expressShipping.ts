import { IShipmentProduct } from '../interface/shipmentProduct.interface';

export class ExpressShipping implements IShipmentProduct {
  /**
   * @param {number}weightInKg - KG
   * @returns {number} - per KG 5 rupees
   */
  productCost(weightInKg: number): number {
    return weightInKg * 5; // INR
  }
}
