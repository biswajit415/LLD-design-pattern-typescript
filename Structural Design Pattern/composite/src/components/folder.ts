import { IFileSystem } from '../interface/fileSystem.interface';

export class Folder implements IFileSystem {
  folderName!: string;
  fileSystemList: IFileSystem[] = [];

  constructor(name: string) {
    this.folderName = name;
  }
  add(fileSystem: IFileSystem) {
    this.fileSystemList.push(fileSystem);
  }

  printFileList(): void {
    console.log(`Folder Name: -> `, this.folderName);
    for (const fileSystem of this.fileSystemList) {
      fileSystem.printFileList();
    }
  }
}
