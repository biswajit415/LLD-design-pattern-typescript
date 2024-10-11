import { ShipmentService } from '../abstractions/shipment.service';

export class DomesticShipping extends ShipmentService {
  calculateShipmentCost(weight: number, destination: string): number {
    console.log(`Domestic Shipment for ${destination}`);
    return this.productImplementation.productCost(weight) * 20;
  }
  getDeliveryTime(destination: string): string {
    /**
     * decision should be taken based upon lat/long
     */
    return `${destination}-5 days`;
  }
}
