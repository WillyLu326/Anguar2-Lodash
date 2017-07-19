import { Angular2LodashPage } from './app.po';

describe('angular2-lodash App', () => {
  let page: Angular2LodashPage;

  beforeEach(() => {
    page = new Angular2LodashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
