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
    //  //Checkbox padre
    this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]');   

    //  //Checkbox hijo --> en caso de que se quiera ser muy especifico en el nombre del componente que se está localizando
    //this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
    //this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');

    // Practica 5
    this.link5 = Selector('a').withText('Inputs');
    this.input51 = Selector('#content > div > div > div > input[type=number]');

    // Practica 5
    this.link6 = Selector('a').withText('Add/Remove Elements');
    this.addBtn61 = Selector('#content > div > button');
    this.removeBtn62 = Selector('#elements > button') // Selector cuendo se agrega solo un elemento
    this.removeBtn63 = Selector('#elements > button:nth-child(1)')  
    this.removeBtn64 = Selector('#elements > button:nth-child(2)')    
    this.removeBtn65 = Selector('#elements > button:nth-child(3)')   
    

    }
}
export default new Page();
