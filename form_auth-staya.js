describe('авторизация staya ', function () {
    it('Форма авторизации. Авторизация. Позитивные данные', function () {
         cy.visit('https://staya.dog');
         cy.get("#stickyHeader > section.header-bottom.transition-header > div > div > a").click();
         cy.get('.auth-form > form > [type="email"]').type("rs503@mail.ru");
         cy.get('.auth-form > form > [type="password"]').type("QQqq12345678");
         cy.get(".auth-form__submit").click();
         cy.contains('Мои заказы');
         cy.get("#__layout > div > main > div > div.container > div > aside > button").click();
         cy.get("#__layout > div > div > section > div > div > div > button.box__button.box__button_ok.s-button.s-button_theme-dark").click();
       
     })

     it('Форма авторизации. Авторизация. Неверный пароль', function () {
        cy.get("#stickyHeader > section.header-bottom.transition-header > div > div > a").click();
        cy.get('.auth-form > form > [type="email"]').type("rs503@mail.ru");
        cy.get('.auth-form > form > [type="password"]').type("QQqq12345679");
        cy.get(".auth-form__submit").click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        
       
      
    })
     
 })
 