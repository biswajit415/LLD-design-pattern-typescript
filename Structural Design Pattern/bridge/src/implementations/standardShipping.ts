import { IShipmentProduct } from '../interface/shipmentProduct.interface';

export class StandardShipping implements IShipmentProduct {
  /**
   * @param {number}weightInKg - KG
   * @returns {number} - per KG 5 rupees
   */
  productCost(weightInKg: number): number {
    return weightInKg * 4; // INR
  }
}
