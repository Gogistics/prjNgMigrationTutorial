import { NgClilazyLoadingPage } from './app.po';

describe('ng-clilazy-loading App', () => {
  let page: NgClilazyLoadingPage;

  beforeEach(() => {
    page = new NgClilazyLoadingPage();
  });

  it('should navigate to the page', () => {
    page.navigateTo();
  });
});
