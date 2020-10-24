import page from './objectModel';

fixture('Test con testcafe')
    .page('https://formy-project.herokuapp.com/thanks')

test('Probando nuestro primer formulario'), async t =>{
    await t
        .typeText(page.input71, "Ana", {speed:0.1})
}
