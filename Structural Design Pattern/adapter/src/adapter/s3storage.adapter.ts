import { IFileStorage } from '../interface/fileStorage.interface';
import { S3Storage } from './../storage/awsS3.storage';

export class S3StorageAdapter implements IFileStorage {
  private s3storage: S3Storage;
  constructor() {
    this.s3storage = new S3Storage();
  }

  public uploadFile(path: string, content: string): void {
    const key: string = process.env.awsKey as string;
    const pathObject = {
      uri: path,
      awsKey: key,
    };
    const result = this.s3storage.putObject(pathObject, content);
    console.log(result);
  }

  public downloadFile(path: string): string {
    const key: string = process.env.awsKey as string;
    const pathObject = {
      uri: path,
      awsKey: key,
    };
    return this.s3storage.getObject(pathObject);
  }
}
