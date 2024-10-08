import { S3StorageAdapter } from './src/adapter/s3storage.adapter';

//client Code
const main = () => {
  const path = 'https//localhost:3030';

  const fileStorage = new S3StorageAdapter();

  fileStorage.uploadFile(path, 'data');
  const getData = fileStorage.downloadFile(path);

  console.log(getData);
};

main();
