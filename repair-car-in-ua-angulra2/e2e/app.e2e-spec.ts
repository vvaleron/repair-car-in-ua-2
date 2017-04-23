import { RepairCarInUaPage } from './app.po';

describe('repair-car-in-ua App', () => {
  let page: RepairCarInUaPage;

  beforeEach(() => {
    page = new RepairCarInUaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
