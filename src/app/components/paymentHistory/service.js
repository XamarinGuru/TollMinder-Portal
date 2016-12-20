const dummyData = [
  {
    _tollRoad : {
      name: 'Some Road 1',
      state: 'NY'
    },
    billingDate: new Date('10.11.16'),
    transactionID: '31231231241',
    tolls: 4.45,
    commission: 2.50,
    payed: false
  },
  {
    _tollRoad : {
      name: 'Some Road 2',
      state: 'VA'
    },
    billingDate: new Date('10.16.16'),
    transactionID: '31231231543',
    tolls: 4.45,
    commission: 2.50,
    payed: false
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('10.28.16'),
    transactionID: '31231231454',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('10.30.16'),
    transactionID: '31231233476',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('11.5.16'),
    transactionID: '31867873141',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('11.10.16'),
    transactionID: '38976722124',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('11.13.16'),
    transactionID: '31239853415',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('11.16.16'),
    transactionID: '54332189863',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('11.18.16'),
    transactionID: '31231265432',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('11.20.16'),
    transactionID: '31231231673',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('11.23.16'),
    transactionID: '12842294931',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('11.26.16'),
    transactionID: '32388673034',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('11.29.16'),
    transactionID: '86949928753',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('12.2.16'),
    transactionID: '86899923492',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('12.4.16'),
    transactionID: '75210405243',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('12.15.16'),
    transactionID: '31231212356',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('12.17.16'),
    transactionID: '31231558356',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('12.12.16'),
    transactionID: '31231777356',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('12.11.16'),
    transactionID: '77731622356',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },
  {
    _tollRoad : {
      name: 'Some Road 3',
      state: 'FL'
    },
    billingDate: new Date('12.19.16'),
    transactionID: '31231258886',
    actionDate: new Date(),
    tolls: 16.00,
    commission: 4.50,
    payed: true
  },

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

  convertHtmlToPdf(html) {
    return this.http.post(`${this.API}/file/convertHtmlToPdf`, {html});
  }

  deleteFile(filename) {
    return this.http.delete(`${this.API}/file/${filename}`);
  }


}
