'use strict';

class HomeController {
  constructor($scope) {
    this.options = {
    };
  }
}

export default ($scope) => {
  return new HomeController($scope);
}
