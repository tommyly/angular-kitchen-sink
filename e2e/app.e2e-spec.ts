import { AngularKitchenSinkPage } from './app.po';

describe('angular-kitchen-sink App', () => {
  let page: AngularKitchenSinkPage;

  beforeEach(() => {
    page = new AngularKitchenSinkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
