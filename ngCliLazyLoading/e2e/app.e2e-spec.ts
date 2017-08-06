import { NgClilazyLoadingPage } from './app.po';
import {  
    browser, element, by
}
from 'protractor';
import * as request from "request";

describe('ng-clilazy-loading App', () => {
  let page: NgClilazyLoadingPage;

  beforeEach(() => {
    page = new NgClilazyLoadingPage();
    request
      .get('http://www.google.com')
      .on('response', function(response) {
        console.log(response);
        // console.log(response.statusCode) // 200
        // console.log(response.headers['content-type']) // 'image/png'
      })
      .on('error', function(err) {
        console.log(err)
      });
  });

  it('should navigate to the page', () => {
    page.navigateTo();
  });

  it('test rest api', () => {
    // browser.waitForAngularEnabled(false);
    // browser.get('https://www.google.com');
  });
});
