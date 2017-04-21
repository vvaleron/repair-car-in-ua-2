'use strict';

export default angular.module('AppRouter', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    const state = {
      login: {
        name: 'login',
        url: '/login',
        template: '<h3>Login View!</h3>'
      }
    };

    $stateProvider.state(state.login);
  })
  .name;
