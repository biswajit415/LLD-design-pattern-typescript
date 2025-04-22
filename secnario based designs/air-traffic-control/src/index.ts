import { Aircraft } from './colleague/aircraft';
import { ControlTower } from './mediator/controlTower';

const tower = new ControlTower();

const aircraft1 = new Aircraft('F-101', tower, {
  x: 10,
  y: 10,
  altitude: 3000,
});
const aircraft2 = new Aircraft('F-102', tower, {
  x: 12,
  y: 22,
  altitude: 3200,
});
const aircraft3 = new Aircraft('F-103', tower, {
  x: 50,
  y: 50,
  altitude: 5000,
});

aircraft1.updatePosition({ x: 11, y: 11, altitude: 3100 }); // Close to plane2
aircraft2.updatePosition({ x: 11.5, y: 11.5, altitude: 3100 }); // Triggers collision risk
aircraft3.updatePosition({ x: 51, y: 51, altitude: 5100 }); // Safe distance
