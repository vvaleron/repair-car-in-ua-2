'use strict';
import template from './register.tmpl.html';

export default ($stateProvider) => {
  $stateProvider.state({
    name: 'register',
    url: '/register',
    template: template
  });
};
