import { ShipmentCollection } from './collections';
import { ExpressShipment } from './elements/express';
import { StandardShipment } from './elements/standard';
import { CostReportVisitor } from './visitor/costVisitor';
import { StatusReportVisitor } from './visitor/statusVisitor';

const collection = new ShipmentCollection();
collection.addShipment(new StandardShipment('SHIP-001', 'In Transit'));
collection.addShipment(new ExpressShipment('SHIP-002', 50));

const statusVisitor = new StatusReportVisitor();
collection.accept(statusVisitor); // Generate status reports

const costVisitor = new CostReportVisitor();
collection.accept(costVisitor); // Generate cost reports
