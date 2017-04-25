import { NgClilazyLoadingPage } from './app.po';

describe('ng-clilazy-loading App', () => {
  let page: NgClilazyLoadingPage;

  beforeEach(() => {
    page = new NgClilazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
