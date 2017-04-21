'use strict';

class UsersController {
  constructor($scope, $mdDialog, UserFactory) {
    this.users = [];
    this.isEditMod = false;
    UserFactory.getUsers().then((response) => {
      this.users = response.data.map((user) => {
        user.fullName = `${user.firstName} ${user.lastName}`;
        user.editing = false;

        return user;
      });
    });
    this.UserFactory = UserFactory;
    this.$mdDialog = $mdDialog;
  }

  get selectedUsers () {
    return this.users.filter((user) => user.selected);
  }

  get expandedUsers () {
    return this.users.filter((user) => user.expanded);
  }

  navigateTo (to, event) {
    window.location.href = to;
  }

  showUserInfo (user, event) {
    const expandedUser = this.expandedUsers[0] || {};

    expandedUser.expanded = false;

    if (expandedUser !== user) {
      user.expanded = !user.expanded;
    }

    // this.$mdDialog.show(
    //   this.$mdDialog.alert()
    //     .title('Информация Сотрудника')
    //     .textContent(`${user.fullName}`)
    //     .ariaLabel('Person inspect demo')
    //     .ok('Назад')
    //     .targetEvent(event)
    // );
  }

  deleteUser (user, event) {
    // Appending dialog to document.body to cover sidenav in docs app
    const confirm = this.$mdDialog.confirm()
      .title('Вы действительно хотите удалить сотрудника ?')
      .textContent('Вся информация о данном сотруднике будет удалена!')
      .ariaLabel('Lucky day')
      .targetEvent(event)
      .ok('Удалить')
      .cancel('Отмена');

    this.$mdDialog.show(confirm).then(() => {
      alert('Запись будет Удалена');
    }, () => {
      alert('Запись не будет Удалена');
    });
  }

  deleteSelectedUsers ($event) {
    console.log('need to delete this users', this.selectedUsers);
  }

  saveEditedUser (user, $event) {

  }

  editUser (user, $event) {
    user.editing = true;
    this.isEditMod = true;
  }

  cancelEditing (user, $event) {
    user.editing = false;
    this.isEditMod = false;
  }

}

export default ($scope, $mdDialog, UserFactory) => {
  return new UsersController($scope, $mdDialog, UserFactory);
}
