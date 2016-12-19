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
    this.limit = 5;
    this.checkedAll = false;
    this.checkedAny = false;

    this.history = [];
    this.getPaymentHistory();
  }

  getPaymentHistory() {
    this.Service.getPaymentHistory()
    .then((res) => {
      this.history = res.data.map(item => {
        item.checked = false;
        return item;
      });
    })
    .catch(this.log.error);
    this.checkAny();
  }

  checkAll() {
    this.history.map(item => item.checked = this.checkedAll);
    this.checkAny();
  }

  checkAny() {
    let flag = false;
    this.history.map(item => {
      if (item.checked) flag = true;
    });
    this.checkedAny = flag ? true : false;
    this.calculateTollsAndCommission();
  }

  calculateTollsAndCommission() {
    this.totalTolls = this.history.reduce((prev, curr) => {
      if (curr.checked) return prev + curr.tolls;
      return prev;
    }, 0);
    this.totalCommission = this.history.reduce((prev, curr) => {
      if (curr.checked) return prev + curr.commission;
      return prev;
    }, 0);
  }

  payChecked() {
    this.dialog.show(
      this.dialog.alert()
      .title('Error')
      .textContent('This feature is currently unavailable')
      .ok('OK')
    );
  }

  downloadPDF() {
    let html = document.getElementById('pdf').innerHTML;
    this.Service.convertHtmlToPdf(html)
    .then(res => {
      let {link} = res.data;
      this.window.open(link);
      this.timeout(() => this.Service.deleteFile(link.split('/uploads/')[1]), 5000);
    })
    .catch(this.log.error);
  }
}
