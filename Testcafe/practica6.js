import page from './pageModel';

fixture('Practica 6 con Testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probar agregar 1 elemento', async t =>{
    await t
        .click(page.link6)
        
    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        .expect(page.removeBtn62.visible).ok()
});

    test('Probar agregar 3 elementos', async t =>{
    await t
        .click(page.link6)
    
    await t
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)

        .expect(page.removeBtn63.visible).ok()
        .expect(page.removeBtn64.visible).ok()
        .expect(page.removeBtn65.visible).ok()
        .wait(3000)
});

test('Probar agregar 1 elemento y removerlo', async t =>{
    await t
        .click(page.link6)
    
    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        .expect(page.removeBtn62.visible).ok()

        .click(page.removeBtn62)
        .expect(page.removeBtn62.visible).notOk()
});

test('Probar agregar 3 elementos y remover 1 elemento', async t =>{
    await t
        .click(page.link6)
    
    await t
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)

        .expect(page.removeBtn63.visible).ok()
        .expect(page.removeBtn64.visible).ok()
        .expect(page.removeBtn65.visible).ok()

        .click(page.removeBtn63)

        .expect(page.removeBtn63.visible).ok()
        .expect(page.removeBtn64.visible).ok()
        .expect(page.removeBtn65.visible).notOk()
});

test('Probar agregar 3 elementos y remover los 3 elementos', async t =>{
    await t
        .click(page.link6)
    
    await t
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)

        .expect(page.removeBtn63.visible).ok()
        .expect(page.removeBtn64.visible).ok()
        .expect(page.removeBtn65.visible).ok()

        .click(page.removeBtn63)
        .click(page.removeBtn63)
        .click(page.removeBtn63)

        .expect(page.removeBtn63.visible).notOk()
        .expect(page.removeBtn64.visible).notOk()
        .expect(page.removeBtn65.visible).notOk()
});
