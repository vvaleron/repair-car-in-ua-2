'use strict';

import angular from 'angular';
import homeState from './state.config';
import HomeController from './home.ctrl';

export default angular.module('home', [ 'ui.router' ])
  .controller('HomeCtrl', HomeController)
  .config(homeState)
  .name;
