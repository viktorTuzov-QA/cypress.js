describe('форма авторизации', function () {
    it('Форма авторизации. Авторизация. Позитивные данные', function () {
         cy.visit('https://login.qa.studio');
         cy.get("#mail").type("german@dolnikov.ru");
         cy.get("#pass").type("iLoveqastudio1");
         cy.get("#loginButton").click();
         cy.contains('Авторизация прошла успешно');
         cy.get("#exitMessageButton").click();
     })

     it('Форма авторизации. Авторизация. Не верный пароль', function () {
        
        cy.get("#mail").type("german@dolnikov.ru");
        cy.get("#pass").type("iLoveqastudio2");
        cy.get("#loginButton").click();
        cy.contains('Такого логина или пароля нет');
        cy.get("#exitMessageButton").click();
    })

    it('Форма авторизации. Авторизация. Не верный логин', function () {
        
        cy.get("#mail").type("german@dolnikova.ru");
        cy.get("#pass").type("iLoveqastudio1");
        cy.get("#loginButton").click();
        cy.contains('Такого логина или пароля нет');
        cy.get("#exitMessageButton").click();
    })

    it('Форма забыт пароль. Восстановление пароля. Позитиивные данные', function () {
        
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type("rs503@mail.ru")
        cy.get("#restoreEmailButton").click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get("#exitMessageButton").click();
    })
 })
 