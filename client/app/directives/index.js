'use strict';

import angular from 'angular';
import menuListDirective from './menu-list.directive';

export default angular.module('AppDirectives', ['ngMaterial'])
  .directive('menuList', menuListDirective)
  .name;
