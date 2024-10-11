import { ExpressShipping } from './src/implementations/expressShipping';
import { StandardShipping } from './src/implementations/standardShipping';
import { DomesticShipping } from './src/shipment-managers/domesticShipment';
import { InternationalShipping } from './src/shipment-managers/internationalShipment';

const express = new ExpressShipping();
const domesticExpress = new DomesticShipping(express);
const domesticCost = domesticExpress.calculateShipmentCost(10, 'mumbai');
const domesticDelivery = domesticExpress.getDeliveryTime('mumbai');
console.log(` cost :${domesticCost}, delivery:${domesticDelivery}`);

const standard = new StandardShipping();
const internationalStandard = new InternationalShipping(standard);
const internationalDelivery = internationalStandard.getDeliveryTime('US');
const internationalCost = internationalStandard.calculateShipmentCost(15, 'US');
console.log(` cost :${internationalCost}, delivery:${internationalDelivery}`);
