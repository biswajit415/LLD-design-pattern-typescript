import { Aircraft } from '../colleague/aircraft';
import { IAircraft, Position } from '../interface/aircraft';
import { IAirTrafficControl } from '../interface/airTrafficControl';

export class ControlTower implements IAirTrafficControl {
  private aircrafts: Map<string, IAircraft> = new Map();

  registerAircraft(aircraft: IAircraft): void {
    this.aircrafts.set(aircraft.id, aircraft);
    console.log(`Aircraft -> ${aircraft.id} registered with control tower.`);
  }

  reportPosition(aircraft: IAircraft, position: Position): void {
    const object = this.aircrafts.get(aircraft.id) as Aircraft;
    object.position = position;

    console.log(
      `aircraft ${aircraft.id} reported position: (${position.x}, ${position.y}, ${position.altitude})`
    );

    this.checkForCollisions(aircraft);
  }
  sendInstruction(aircraft: IAircraft, instruction: string): void {
    aircraft.receiveInstruction(instruction);
  }

  private checkForCollisions(aircraft: IAircraft): void {
    const MIN_SAFE_DISTANCE = 5;
    const MIN_ALTITUDE_DIFFERENCE = 1000;

    for (const otherAircraft of this.aircrafts.values()) {
      if (otherAircraft.id === aircraft.id) continue;
      const dx = aircraft.position.x - otherAircraft.position.x;
      const dy = aircraft.position.y - otherAircraft.position.y;
      const dz = Math.abs(
        aircraft.position.altitude - otherAircraft.position.altitude
      );
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MIN_SAFE_DISTANCE && dz < MIN_ALTITUDE_DIFFERENCE) {
        console.warn(
          `Collision risk detected between ${aircraft.id} and ${otherAircraft.id}!`
        );
        this.sendInstruction(
          aircraft,
          `Adjust altitude to ${
            aircraft.position.altitude + MIN_ALTITUDE_DIFFERENCE
          } feet.`
        );
        this.sendInstruction(
          otherAircraft,
          `Adjust altitude to ${
            otherAircraft.position.altitude - MIN_ALTITUDE_DIFFERENCE
          } feet.`
        );
      }
    }
  }
}
