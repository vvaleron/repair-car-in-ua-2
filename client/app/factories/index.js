'use strict';

import angular from 'angular';
import UserFactory from './user.factory';

export default angular.module('AppFactories', [])
  .factory('UserFactory', UserFactory)
  .name;
