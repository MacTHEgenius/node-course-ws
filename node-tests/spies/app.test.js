const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = { saveUser: expect.createSpy() };
    app.__set__('db', db);
    
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('MTG', 20);
        expect(spy).toHaveBeenCalledWith('MTG', 20);
    });
    
    it('should call saveUser with user object', () => {
        var email = 'email@example.com';
        var password = 'password';
        
        app.handleSignup(email, password);
        
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    })
    
});