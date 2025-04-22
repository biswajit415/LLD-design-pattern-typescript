import { IAircraft, Position } from './aircraft';

export interface IAirTrafficControl {
  registerAircraft(aircraft: IAircraft): void;
  reportPosition(aircraft: IAircraft, position: Position): void;
  sendInstruction(aircraft: IAircraft, instruction: string): void;
}
