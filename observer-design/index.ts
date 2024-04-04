import { IphoneStockObservable } from './observables/Iphone.observable';
import { SamsungStockObservable } from './observables/Samsung.observable';
import { EmailAlert } from './observers/Email.observer';
import { MobileAlert } from './observers/Mobile.observer';

let Client = () => {
  //observables / subjects initialize
  let IphoneStock: IphoneStockObservable = new IphoneStockObservable();
  let SamsungStock: SamsungStockObservable = new SamsungStockObservable();

  //observer set up
  let IphnObservers = [
    new EmailAlert('john', IphoneStock),
    new EmailAlert('james', IphoneStock),
    new MobileAlert('tomm', IphoneStock),
  ];

  let samsungObservers = [new MobileAlert('tomm', SamsungStock)];
  IphnObservers.forEach((observer) => {
    IphoneStock.add(observer);
  });
  samsungObservers.forEach((observer) => {
    SamsungStock.add(observer);
  });

  //changing stock count
  IphoneStock.setStockCount(1);
  SamsungStock.setStockCount(5);
};

Client();
