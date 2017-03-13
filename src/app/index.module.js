import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';

import {countries} from './shared/countryList';

import {LoginService} from './components/login/service';
import {CrudService} from './shared/crud';
import {PaymentHistoryService} from './components/paymentHistory/service';
import {PaymentService} from './components/payment/service'

import {RootController} from './index.controller';
import {LoginController} from './components/login/controller';
import {HomeController} from './components/home/controller';
import {SettingsController} from './components/settings/controller';
import {PaymentHistoryController} from './components/paymentHistory/controller';
import {PaymentController} from './components/payment/controller';

angular.module('tollminderPortal',
  [ 'ngSanitize',
    'ngMessages',
    'ui.router',
    'ui.mask',
    'ngMaterial',
    'md.data.table',
    'ngMap',
    'googleplus',
    'facebook',
    'ngFileUpload',
    'ngContextMenu',

  ])


//.constant('API', 'http://54.152.103.212/api')
 .constant('API', 'https://tollminder.com/api')
 // .constant('API', 'http://localhost:7000/api')
.constant('G_API_Key', 'AIzaSyBEacqW7NBeaCpNgMgpHcA9GVHWvanZrK8')
.constant('COUNTRIES', countries)

.config(config)
.config(routerConfig)

.run(runBlock)

.controller('RootController', RootController)
.controller('LoginController', LoginController)
.controller('HomeController', HomeController)
.controller('SettingsController', SettingsController)
.controller('PaymentHistoryController', PaymentHistoryController)
.controller('PaymentController', PaymentController)

.service('LoginService', LoginService)
.service('PaymentHistoryService', PaymentHistoryService)
.service('CrudService', CrudService)
.service('PaymentService', PaymentService);
