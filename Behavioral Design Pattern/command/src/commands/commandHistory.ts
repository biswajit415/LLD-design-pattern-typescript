import { ICommand } from '../interface/command.interface';

export class History {
  private undoCommands: ICommand[] = [];
  private redoCommands: ICommand[] = [];

  executeCommand(command: ICommand) {
    command.execute();
    this.undoCommands.push(command);
  }

  undo(): void {
    if (this.undoCommands.length > 0) {
      const command = this.undoCommands.pop() as ICommand;
      command.undo();
      this.redoCommands.push(command);
    }
  }

  redo(): void {
    if (this.redoCommands.length > 0) {
      const command = this.redoCommands.pop() as ICommand;
      command.execute();
      this.undoCommands.push(command);
    }
  }
}
