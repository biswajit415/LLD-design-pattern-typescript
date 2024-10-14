import { IChracter } from './../interface/character.interface';

export class DocumentCharacter implements IChracter {
  /**
   * Sharable Property
   * char --> Intrinsic
   * font --->Intrinsic
   */
  private char!: string;
  private font!: string;

  constructor(char: string, font: string) {
    this.char = char;
    this.font = font;
  }

  getChar(): string {
    return this.char;
  }
  getFont(): string {
    return this.font;
  }

  /**
   *
   * @param positionX - Extrinsic  - varies object to object
   * @param positionY - Extrinsic  - varies object to object
   */
  display(positionX: number, positionY: number): void {
    console.log(
      `Character: ${this.char}, Font: ${this.font}, Position: (${positionX}, ${positionY})`
    );
  }
}
