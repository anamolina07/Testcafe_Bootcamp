import { Selector} from 'testcafe';
import page from './pageModel';

fixture('Practica 2 con Testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probar dar clic en el enlace', async t =>{
    await t
        .click(page.link2)
    await t
    //    .expect(page.text21).ok();
    //    .expect(page.text21.exists).ok();
    //    .expect(page.text21.innerText).contains('A/B Test Variation 1');

    const valorText21 = page.text21.innerText

    if ((page.text21.innerText == 'A/B Test Variation 1') //|| (page.text21.innerText == 'A/B Test Control')
    ){
        console.log ("Pasa prueba valor, de text21:" + valorText21)
    } else {
        console.log ("No pasa, valor de text21: " + valorText21 )
    }
});
