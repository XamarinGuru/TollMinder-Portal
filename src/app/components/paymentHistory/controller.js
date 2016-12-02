export class PaymentHistoryController {
  constructor($state, $log, PaymentHistoryService) {
    'ngInject';
    this.state = $state;
    this.log = $log;
    this.Service = PaymentHistoryService;

    this.page = 1;
    this.limit = 5;

    this.history = [];
    this.getPaymentHistory();
  }

  getPaymentHistory() {
    this.Service.getPaymentHistory()
    .then((res) => {
      this.history = res.data;
      this.totalTolls = this.history.reduce((prev, curr) => prev + curr.tolls, 0);
      this.totalCommission = this.history.reduce((prev, curr) => prev + curr.commission, 0);
    })
    .catch(this.log.error)
  }
}
