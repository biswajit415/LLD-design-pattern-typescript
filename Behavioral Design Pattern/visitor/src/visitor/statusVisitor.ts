import { ExpressShipment } from '../elements/express';
import { StandardShipment } from '../elements/standard';
import { ShipmentVisitor } from '../interface/visitor.interface';

export class StatusReportVisitor implements ShipmentVisitor {
  visitStandard(shipment: StandardShipment): void {
    console.log(
      `Status Report: Shipment ${shipment.getShipmentId()} - Status: ${shipment.getStatus()}`
    );
  }

  visitExpress(shipment: ExpressShipment): void {
    console.log(
      `Status Report: Shipment ${shipment.getShipmentId()} - Status: N/A (Express)`
    );
  }
}
