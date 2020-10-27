import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probando presionar teclas', async t =>{
    await t
        .click(page.link9)

    await t
        .pressKey('backspace')
        .wait(500) //las esperas están en milisegundos

    await t
        .pressKey('c')
        .wait(500) //las esperas están en milisegundos
        .expect(page.text91.innerText).contains('You entered: C')
        .expect(page.text91.innerText).notContains('You entered: backspace')

    await t
        .pressKey('ENTER')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: ENTER')

        .pressKey('up')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: UP')

        .pressKey('down')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: DOWN')

        .pressKey('tab')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: TAB')

        .pressKey('esc')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: ESC')

        .pressKey('shift')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: SHIFT')

        .pressKey('capslock')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: CAPS_LOCK')

        .pressKey('space')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: SPACE')
});
    
