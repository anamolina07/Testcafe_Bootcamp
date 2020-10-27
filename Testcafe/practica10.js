import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probando un click derecho', async t =>{
    await t
        .click(page.link10)

    await t
        .setNativeDialogHAndler()
        .rightClick(page.hotspot101)
    

});