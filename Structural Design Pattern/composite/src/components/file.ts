import { IFileSystem } from '../interface/fileSystem.interface';

export class File implements IFileSystem {
  public fileName: string = '';

  constructor(name: string) {
    this.fileName = name;
  }

  printFileList(): void {
    console.log(`File Name: -`, this.fileName);
  }
}
