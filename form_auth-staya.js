describe('авторизация staya ', function () {
    it('Форма авторизации. Авторизация. Позитивные данные', function () {
         cy.visit('https://staya.dog');
         cy.get(".header-bottom__right--link[data-v-51321da9]").click();
         cy.get("[data-v-3fa00444][type='email']").type("rs503@mail.ru");
         cy.get("[data-v-3fa00444][type='password']").type("QQqq12345678");
         cy.get(".auth-form__submit").click();
         cy.contains('Мои заказы');
         cy.get("[data-v-698c6e54][type='button']").click();
         cy.get(".box__button.box__button_ok").click();
       
     })

     it('Форма авторизации. Авторизация. Неверный пароль', function () {
        cy.get(".header-bottom__right--link[data-v-51321da9]").click();
        cy.get("[data-v-3fa00444][type='email']").type("rs503@mail.ru");
        cy.get("[data-v-3fa00444][type='password']").type("QQqq12345679");
        cy.get(".auth-form__submit").click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        
       
      
    })
     
 })
 
 