export class SettingsController {
  constructor($state, $log, CrudService, $mdDialog) {
    'ngInject';
    this.state = $state;
    this.log = $log;
    this.Crud = CrudService;
    this.dialog = $mdDialog;

    this.userEditLoaded = true;

    this.editMode = false;
    this.cardNumber = '';

    this.cardMonth = 1;
    this.cardYear = 2016;
    this.autoPayment = true;
    this.getUser();
  }

  getUser() {
    this.Crud.get('user', localStorage.uId)
    .then((response) => this.user = response.data)
    .catch(this.log.error);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveUser() {
    if (this.form.$valid) {
      this.userEditLoaded = false;
      this.log.debug(this.form);
      this.Crud.save('user', this.user, true)
      .then(_ => {
        this.editMode = !this.editMode;
        this.userEditLoaded = true;
      })
    }
  }

  savePaymentInfo() {
    this.dialog.show(
      this.dialog.alert()
      .title('Error')
      .textContent('This feature is currently unavailable')
      .ok('OK')
    );
  }
}
