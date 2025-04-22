import { EventEmitter } from 'stream';
import { IAircraft, Position } from '../interface/aircraft';
import { IAirTrafficControl } from '../interface/airTrafficControl';

export class Aircraft implements IAircraft {
  id: string;
  position: Position;
  eventEmitter: EventEmitter;

  private mediator: IAirTrafficControl;

  constructor(
    id: string,
    mediator: IAirTrafficControl,
    initialPosition: Position
  ) {
    this.id = id;
    this.mediator = mediator;
    this.position = initialPosition;
    this.mediator.registerAircraft(this);
    this.eventEmitter = new EventEmitter();
  }
  updatePosition(newPos: Position): void {
    this.position = newPos;
    this.mediator.reportPosition(this, newPos);
  }
  receiveInstruction(instruction: string): void {
    console.error(`Received instruction for  ${this.id} ->`, instruction);
  }
}
