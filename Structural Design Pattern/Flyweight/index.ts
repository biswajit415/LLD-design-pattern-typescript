import { CharacterFactory } from './src/flyweight/flyweightFactory';

const factory = new CharacterFactory();

const characters = [
  { character: 'A', font: 'Arial', positionX: 10, positionY: 20 },
  { character: 'B', font: 'Arial', positionX: 30, positionY: 40 },
  { character: 'A', font: 'Arial', positionX: 50, positionY: 60 },
  { character: 'C', font: 'Times New Roman', positionX: 70, positionY: 80 },
  { character: 'B', font: 'Arial', positionX: 90, positionY: 100 },
];

characters.forEach(({ character, font, positionX, positionY }) => {
  const char = factory.getCharacter(character, font);
  char.display(positionX, positionY);
});

console.log(`Total flyweights created: ${factory.getCharacterCount()}`);
