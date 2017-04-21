'use strict';
import template from './users.tmpl.html';

export default ($stateProvider) => {
  $stateProvider.state({
    name: 'users',
    url: '/users',
    template: template
  });
};
