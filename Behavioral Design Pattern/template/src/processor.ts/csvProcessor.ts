import { AbstractDataProcessor } from '../abstract-processor/abstractDataProcessor';

export class CSVProcessor extends AbstractDataProcessor {
  protected validate(data: string): boolean {
    return data.includes(','); // Check for CSV format
  }

  protected transform(data: string): string {
    return data.toUpperCase(); // Convert to uppercase
  }
}
