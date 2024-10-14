import { IChracter } from '../interface/character.interface';
import { DocumentCharacter } from './flyweight';

export class CharacterFactory {
  private characterMap: Map<string, IChracter> = new Map();

  getCharacter = (char: string, font: string): IChracter => {
    const key = `${char}_${font}`;

    if (!this.characterMap.has(key)) {
      console.log(`creating new character object`);
      this.characterMap.set(key, new DocumentCharacter(char, font));
    } else {
      console.log(`reusing existing  character object`);
    }
    const character = this.characterMap.get(key)!;
    return character;
  };

  getCharacterCount = (): number => {
    return this.characterMap.size;
  };
}
