import { File } from './src/components/file';
import { Folder } from './src/components/folder';

const main = () => {
  const documentFolder = new Folder('document');
  const resume = new File('resume');
  documentFolder.add(resume);

  const officialDoccument = new Folder(`official`);
  const panCard = new File('panCard');
  officialDoccument.add(panCard);
  documentFolder.add(officialDoccument);

  documentFolder.printFileList();
};

main();
