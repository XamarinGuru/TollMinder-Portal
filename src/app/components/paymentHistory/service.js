const dummyData = [
  {
    _tollRoad : {
      name: 'Some Road 1',
      state: 'NY'
    },
    actionDate: Date.now(),
    tolls: 1.25,
    commission: 2.50,
    payed: false
  },
  {
    _tollRoad : {
      name: 'Some Road 2',
      state: 'VA'
    },
    actionDate: new Date('yyyy-dd-mm hh:mm'),
    tolls: 4.45,
    commission: 2.50,
    payed: false
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    actionDate: Date.now(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  }
];

export class PaymentHistoryService {
  constructor($http, API) {
    'ngInject';
    this.API = API;
    this.http = $http;
  }

  getPaymentHistory() {
    return new Promise((resolve, reject) => {
      resolve({data: dummyData});
    })
  }

}
