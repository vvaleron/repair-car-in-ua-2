'use strict';

import angular from 'angular';
import registerState from './state.config';
import RegisterController from './register.ctrl';

export default angular.module('register', [ 'ui.router' ])
  .controller('RegisterCtrl', RegisterController)
  .config(registerState)
  .name;
