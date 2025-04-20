import { Document } from '../document';
import { ICommand } from '../interface/command.interface';

export class AddCommand implements ICommand {
  private receiver: Document;
  private text: string;

  constructor(receiver: Document, text: string) {
    this.receiver = receiver;
    this.text = text;
  }

  execute(): void {
    this.receiver.append(this.text);
  }
  undo(): void {
    this.receiver.remove(this.text.length);
  }
}
