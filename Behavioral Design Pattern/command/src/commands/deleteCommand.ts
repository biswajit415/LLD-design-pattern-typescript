import { Document } from '../document';
import { ICommand } from '../interface/command.interface';

export class DeleteCommand implements ICommand {
  private receiver: Document;
  private removedText: string = '';
  private length: number;

  constructor(receiver: Document, length: number) {
    this.receiver = receiver;
    this.length = length;
  }

  execute(): void {
    this.removedText = this.receiver.remove(this.length);
  }

  undo(): void {
    this.receiver.append(this.removedText);
  }
}
