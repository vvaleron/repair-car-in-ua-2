'use strict';

class MenuListController {
  constructor($mdSidenav, $scope) {
    this.$mdSidenav = $mdSidenav;
    this.$scope = $scope;
  }

  navigateTo (to, event) {
    this.$scope.toggleLeft();
    window.location.href = to;
  }
}

export default ($mdSidenav, $scope) => {
  return new MenuListController($mdSidenav, $scope);
}
