'use strict';

class AppCtrl {
  constructor($scope, $timeout, $mdSidenav) {
    this.options = {
      sideBarId: 'left'
    };
    this.$mdSidenav = $mdSidenav;
  }

  toggleLeft() {
      this.$mdSidenav(this.options.sideBarId).toggle();
  }

}

export default ($scope, $timeout, $mdSidenav) => {
  return new AppCtrl($scope, $timeout, $mdSidenav);
}
