export class PaymentHistoryController {
  constructor($state, $log, PaymentHistoryService, $mdDialog, $window, $timeout) {
    'ngInject';
    this.state = $state;
    this.log = $log;
    this.Service = PaymentHistoryService;
    this.dialog = $mdDialog;
    this.window = $window;
    this.timeout = $timeout;
    this.page = 1;
    this.limit = 10;

    this.history = [];
    this.filteredHistory = [];
    this.dateTo = new Date();
    this.dateFrom = new Date('10.1.2016');
    this.showCurrent = true;
    this.getPaymentHistory();
  }

  getPaymentHistory() {
    this.Service.getPaymentHistory(this.dateFrom, this.dateTo)
    .then((res) => {
      this.history = res.data.data.trips.map(item => {
        return item;
      });
      debugger;
      this.selectDateRange();
    })
    .catch(this.log.error);

  }

  selectDateRange() {
    this.filteredHistory = this.history.filter(item => {
      debugger;
        return item.paymentDate <= this.dateTo.toISOString() && item.paymentDate >= this.dateFrom.toISOString();
    });
    debugger;
  }


  downloadPDF() {
    this.Service.convertDataToPdf(this.showCurrent, { from: this.dateFrom, to: this.dateTo})
    .then(res => {
      debugger;
      let {link} = res.data;
      this.window.open(link);
      // this.timeout(() => this.Service.deleteFile(link.split('/uploads/')[1]), 5000);
    })
    .catch(this.log.error);
  }
}
