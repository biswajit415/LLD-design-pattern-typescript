import { CSVProcessor } from './processor.ts/csvProcessor';
import { JSONProcessor } from './processor.ts/jsonProcessor';

const csvProcessor = new CSVProcessor();
csvProcessor.process('name,age\biswa,30'); // Pre-processing CSV data, Saved to file: NAME,AGE...

const jsonProcessor = new JSONProcessor();
jsonProcessor.process('{"name": "biswa", "age": 30}'); // Saved to file: {
