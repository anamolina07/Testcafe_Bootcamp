import page from './pageModel';

fixture('Practica 4 con Testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probar ingresar valores en Input', async t =>{
    await t
       .click(page.link5)
    
    await t
        .typeText(page.input51, "Letras",{speed:0.1})
        .expect(page.input51.value).eql("")

        .typeText(page.input51, "1234567890",{speed:0.1})
        .expect(page.input51.value).notEql("5986")
        .expect(page.input51.value).eql("1234567890")

        .typeText(page.input51, "666",{replace: true})
        .typeText(page.input51, "#$!&#$%&=?¡*-+",{replace: true})
});

test('Probar ingresar letras en Input', async t =>{
    await t
       .click(page.link5)
    
    await t
        .typeText(page.input51, "Letras")
        .expect(page.input51.value).eql("")
});

test('Probar ingresar caracteres especiales en Input', async t =>{
    await t
        .click(page.link5)
           
    await t
    .typeText(page.input51, "#$!&#$%&=?¡*-+")
        .expect(page.input51.value).eql("")
});

test('Probar ingresar letras y numeros en Input', async t =>{
    await t
        .click(page.link5)
           
    await t
    .typeText(page.input51, "Hola12345")
        .expect(page.input51.value).eql("12345")
});