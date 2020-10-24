import page from './pageModel';

fixture('Practica 3 con Testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probar que aparecen correctamente el input y boton', async t =>{
    await t
        .click(page.link3)

    await t
        .expect(page.input31.exists).ok()
        .expect(page.button32.exists).ok()
});

test('Probar que podemos escribir un email', async t =>{
    await t
        .click(page.link3)
    
    await t
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
})

test('Probar envio correcto de email', async t =>{
    await t
        .click(page.link3)

    await t
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
        .click(page.button32)

    await t
    //  .expect(page.text21.innerText).contains('A/B Test Variation 1');
        .expect(page.text33.innerText).contains('sent','Prueba exitosa')
})