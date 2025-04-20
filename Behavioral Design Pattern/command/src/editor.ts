import { AddCommand } from './commands/addCommand';
import { History } from './commands/commandHistory';
import { DeleteCommand } from './commands/deleteCommand';
import { Document } from './document';

export class Editor {
  private document: Document;
  private history: History;

  constructor() {
    this.document = new Document();
    this.history = new History();
  }

  addText(text: string): void {
    const command = new AddCommand(this.document, text);
    this.history.executeCommand(command);
    console.log(`Content: ${this.document.getContent()}`);
  }

  deleteText(length: number): void {
    const command = new DeleteCommand(this.document, length);
    this.history.executeCommand(command);
    console.log(`Content: ${this.document.getContent()}`);
  }

  undo(): void {
    this.history.undo();
    console.log(`Undo - Content: ${this.document.getContent()}`);
  }

  redo(): void {
    this.history.redo();
    console.log(`Redo - Content: ${this.document.getContent()}`);
  }
}
