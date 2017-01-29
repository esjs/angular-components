import { browser, element, by } from 'protractor';

export class AngularComponentsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('esjs-root h1')).getText();
  }
}
