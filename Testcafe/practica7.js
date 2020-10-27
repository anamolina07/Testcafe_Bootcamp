import page from './pageModel';

fixture('Test con testcafe')
    .page('https://formy-project.herokuapp.com/form')

test('Probando nuestro primer formulario', async t =>{
    await t
        .typeText(page.input71, "Ana", {speed:0.1})
        .expect(page.input71.value).eql("Ana")
        .typeText(page.input72, "Molina")
        .expect(page.input72.value).eql("Molina")
        .typeText(page.input73, "Software Engenier")
        .expect(page.input73.value).eql("Software Engenier")
        .click(page.rbtn74)
        .expect(page.rbtn74.checked).ok()
        .click(page.rbtn75)
        .expect(page.rbtn75.checked).ok()
        .click(page.rbtn76)
        .expect(page.rbtn76.checked).ok()
        .click(page.checkbox77)
        .expect(page.checkbox77.checked).ok()
        .click(page.smenu701)
        .click(page.opt702)
        .typeText(page.date703, "26102020")
        .click(page.button704)
    
    await t
        .expect(page.text705.visible).ok()
});
