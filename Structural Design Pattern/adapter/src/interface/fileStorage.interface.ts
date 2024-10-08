export interface IFileStorage {
  uploadFile(path: string, content: string): void;
  downloadFile(path: string): string;
}
