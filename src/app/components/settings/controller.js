export class SettingsController {
  constructor($state, $log, CrudService) {
    'ngInject';
    this.state = $state;
    this.log = $log;
    this.Crud = CrudService;

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

  avatarUpload() {

  }

  save() {
    if (this.form.$valid) {
      this.log.debug(this.form);
      this.editMode = !this.editMode;
    }
  }
}
