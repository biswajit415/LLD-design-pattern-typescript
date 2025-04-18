import { ShipmentVisitor } from './visitor.interface';

export interface ShipmentElement {
  accept(visitor: ShipmentVisitor): void;
}
