/// <reference types='cypress'/>
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../Pages/HomePage/HomePage.spec.js';

Given('I navigate to the website', () => {
  homePage.enterURL();
});

Then('Validate the menus in home page', (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.validateMenus(element.menu_name);
  });
});
Then('Validate the title after login', (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.verifyPageTitle(element.title);
  });
});