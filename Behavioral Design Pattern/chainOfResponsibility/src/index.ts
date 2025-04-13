import { TeamLead } from './handlers/lead.approver';
import { Manager } from './handlers/manger.approver';
import { Director } from './handlers/director.approver';
import { PurchaseRequest } from './request/purchase.request';

const teamLead = new TeamLead();
const manager = new Manager();
const director = new Director();

teamLead.setNext(manager);
manager.setNext(director);

const request1 = new PurchaseRequest(50, 'Office supplies');
const request2 = new PurchaseRequest(500, 'Team outing');
const request3 = new PurchaseRequest(5000, 'New equipment');
const request4 = new PurchaseRequest(10000, 'Office renovation');

teamLead.processRequest(request1); // Team Lead approves
teamLead.processRequest(request2); // Manager approves
teamLead.processRequest(request3); // Director approves
teamLead.processRequest(request4); // Director approves
