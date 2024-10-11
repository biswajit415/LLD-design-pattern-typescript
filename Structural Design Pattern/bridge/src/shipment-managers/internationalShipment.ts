import { ShipmentService } from '../abstractions/shipment.service';

export class InternationalShipping extends ShipmentService {
  calculateShipmentCost(weight: number, destination: string): number {
    console.log(`International Shipment for ${destination}`);
    return this.productImplementation.productCost(weight) * 20;
  }
  getDeliveryTime(destination: string): string {
    /**
     * decision should be taken based upon lat/long
     * and diff country policy
     */
    return `${destination}-15 days`;
  }
}
