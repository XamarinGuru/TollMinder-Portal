export class HomeController {
  constructor($state, $log, CrudService, $mdDialog) {
    'ngInject';
    this.state = $state;
    this.log = $log;
    this.user = null;
    this.CRUD = CrudService;
    this.dialog = $mdDialog;

    this.getUser();
  }

  getUser(err) {
    this.CRUD.get('user', localStorage.uId)
    .then(res => {
      if (!res.data.phoneValidate)
        this.dialog.show(
          this.dialog.prompt()
          .title('Please input code from SMS')
          .textContent(err)
          .placeholder('XXXX')
          .ok('Validate')
        ).then(code => {
          if (code == '1111')
            res.data.phoneValidate = true;
            this.CRUD.save('user', res.data, true).then(_ => this.dialog.hide())
        }).catch(_ => this.getUser('Try again'))
    })
  }
}
