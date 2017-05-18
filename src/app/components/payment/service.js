// const dummyData = [
//   {
//     _tollRoad : {
//       name: 'Some Road 1',
//       state: 'NY'
//     },
//     actionDate: new Date(),
//     tolls: 1.25,
//     commission: 2.50,
//     payed: false
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 2',
//       state: 'VA'
//     },
//     actionDate: new Date(),
//     tolls: 4.45,
//     commission: 2.50,
//     payed: false
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
//   {
//     _tollRoad : {
//       name: 'Some Road 3',
//       state: 'FL'
//     },
//     actionDate: new Date(),
//     tolls: 16.00,
//     commission: 4.50,
//     payed: true
//   },
// ];
export class PaymentService {
  constructor($http, API) {
    'ngInject';
    this.API = API;
    this.$http = $http;
  }
  getPaymentHistory(userId, params) {
    // return new Promise((resolve, reject) => {
    //   resolve({data: dummyData});
    // })
    return this.$http.get(`${this.API}/trip/${userId}/notPayed`, { params });
  }
  // convertHtmlToPdf(html) {
  //   return this.http.post(`${this.API}/file/convertHtmlToPdf`, {html});
  // }
  deleteFile(filename) {
    return this.http.delete(`${this.API}/file/${filename}`);
  }
}
