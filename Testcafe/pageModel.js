import {Selector } from 'testcafe';

class Page {
    constructor () {
    // Practica 2
    //this.link2 = Selector('#content > ul > li:nth-child(1) > a');
    this.link2 = Selector('a').withText('A/B Testing');  
    //this.text21 = Selector('h3').withText('A/B Test Variation 1');
    this.text21 = Selector('#content > div > h3');

    // Practica 2
    this.link3 = Selector('a').withText('Forgot Password');
    this.input31 = Selector('#email')
    this.button32 = Selector('#form_submit');
    this.text33 = Selector('#content');

    // Practica 4
    this.link4 = Selector('a').withText('Checkboxes');
    //Checkbox padre
    this.baseCheckbox = Select('#checkboxes');
 
    //Checkbox hijo
    //this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
    //this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');
    }
}
export default new Page();
