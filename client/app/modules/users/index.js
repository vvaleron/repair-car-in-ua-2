'use strict';

import angular from 'angular';
import registerState from './state.config';
import RegisterController from './users.ctrl';

export default angular.module('users', [ 'ui.router' ])
  .controller('UsersCtrl', RegisterController)
  .config(registerState)
  .name;
