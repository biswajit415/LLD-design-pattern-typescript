import { AbstractDataProcessor } from '../abstract-processor/abstractDataProcessor';

export class JSONProcessor extends AbstractDataProcessor {
  protected validate(data: string): boolean {
    try {
      JSON.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  protected transform(data: string): string {
    const parsed = JSON.parse(data);
    return JSON.stringify(parsed, null, 2); // Pretty print
  }
}
