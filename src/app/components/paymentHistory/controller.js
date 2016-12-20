export class PaymentHistoryController {
  constructor($state, $log, PaymentHistoryService, $mdDialog, $window, $timeout, $scope) {
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
    this.Service.getPaymentHistory()
    .then((res) => {
      this.history = res.data.map(item => {
        item.checked = false;
        return item;
      });
      this.selectDateRange();
    })
    .catch(this.log.error);

  }

  selectDateRange() {
    this.filteredHistory = this.history.filter(item => {
        return item.billingDate <= this.dateTo && item.billingDate >= this.dateFrom;
    });

  }


  downloadPDF() {
    let html = document.getElementById('pdf').innerHTML;
    this.Service.convertHtmlToPdf(html)
    .then(res => {
      debugger;
      let {link} = res.data;
      this.window.open(link);
      // this.timeout(() => this.Service.deleteFile(link.split('/uploads/')[1]), 5000);
    })
    .catch(this.log.error);
  }
}
