'use strict';
import template from './home.tmpl.html';

export default ($stateProvider) => {
  $stateProvider.state({
    name: 'home',
    url: '/home',
    template: template
  });
};
