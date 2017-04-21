'use strict';

import angular from 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-aria';
import 'material-design-icons';
import 'angular-material';
import 'angular-material/angular-material.css';
import '../assets/app.css';


import AppController from './app.ctrl';

import { themingProvider } from './managers/icon.manager';

import Directives from './directives';
import Factories from './factories';
import AppRouterModule from './router';
import RegisterModule from './modules/register';
import HomeModule from './modules/home';
import UsersModule from './modules/users';

angular.module('app', [
  'ngMaterial',

  Factories,
  Directives,

  AppRouterModule,
  RegisterModule,
  HomeModule,
  UsersModule
])
  .controller('AppCtrl', AppController)
  .config(themingProvider);

