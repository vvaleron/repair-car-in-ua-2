import MenuListTmpl from './menu-list.tmpl.html';
import MenuListController from './menu-list.ctrl';

class MenuListDirective {
  constructor () {
    this.template = MenuListTmpl;
    this.restrict = 'AE';

    this.scope = {
      toggleLeft: '&'
    };
    this.controller = MenuListController;
    this.controllerAs = "ctrl";
  };
}

export default () => {
  return new MenuListDirective();
}
