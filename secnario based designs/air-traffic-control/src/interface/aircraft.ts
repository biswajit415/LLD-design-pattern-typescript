export interface IAircraft {
  id: string;
  position: Position;
  updatePosition(newPos: Position): void;
}

export type Position = {
  x: number;
  y: number;
  altitude: number;
};
