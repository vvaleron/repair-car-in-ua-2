'use strict';

class RegisterController {
  constructor($scope, UserFactory) {
    this.user = {};
    this.UserFactory = UserFactory;
  }
  get isUserFormValid () {
    return document.forms['userForm'].checkValidity();
  }

  fillMockData () {
    this.user.email = 'vanka.pupkin@gmail.com';
    this.user.firstName = 'Ванька';
    this.user.lastName = 'Пупкин';
    this.user.address = 'переулок Кузнечный 14, кв. 15';
    this.user.department = 'Продажи';
    this.user.position = 'Менеджер';
    this.user.city = 'Белая Церковь';
    this.user.state = 'Киевская обл.';
    this.user.postalCode = "09108";
  }

  reachUserInfo (user) {
    user = user || this.user;
    user.avatar = 'assets/images/unknown_avatar.png';
  }

  register () {
    this.reachUserInfo();
    this.UserFactory.insertUser(this.user);
  }
}

export default ($scope, UserFactory) => {
  return new RegisterController($scope, UserFactory);
}
