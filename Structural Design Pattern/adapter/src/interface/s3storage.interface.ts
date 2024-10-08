export interface IS3Storage {
  putObject(
    path: {
      awsKey: string;
      uri: string;
    },
    content: string
  ): void;
  getObject(path: { awsKey: string; uri: string }): string;
}
