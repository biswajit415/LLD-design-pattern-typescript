export interface IChracter {
  getChar(): string;
  getFont(): string;
  display(positionX: number, positionY: number): void;
}
