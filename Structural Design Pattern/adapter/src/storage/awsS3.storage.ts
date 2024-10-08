import { IS3Storage } from '../interface/s3storage.interface';

export class S3Storage implements IS3Storage {
  private storage: Map<string, any> = new Map();

  /**
   *
   * @param path - AWS Path details in Object format
   * @param content
   * @returns  {string}
   */
  public putObject(
    path: {
      awsKey: string;
      uri: string;
    },
    content: string
  ): string {
    this.storage.set(path.uri, content);
    return `data has been saved for ${path.uri}`;
  }

  /**
   * @param path - AWS Path details in Object format
   * @param content
   * @returns {string}
   */
  public getObject(path: { awsKey: string; uri: string }): string {
    return this.storage.get(path.uri);
  }
}
