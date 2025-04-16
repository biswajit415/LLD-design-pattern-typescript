import { DataProcessor } from '../interface/processor.interface';

export abstract class AbstractDataProcessor implements DataProcessor {
  process(data: string): void {
    if (!this.validate(data)) {
      throw new Error('Validation failed');
    }
    const transformedData = this.transform(data);
    this.save(transformedData);
  }

  protected abstract validate(data: string): boolean;
  protected abstract transform(data: string): string;

  protected save(data: string): void {
    new FileSaver().saveToFile(data);
  }

  protected preProcessHook(): void {
    console.log('Default pre-process hook');
  }
}

class FileSaver {
  saveToFile(data: string): void {
    console.log(`Saved to file: ${data}`);
  }
}
