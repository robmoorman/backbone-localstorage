module('version');

test('version is set', 1, function(){
    Backbone.LocalStorage.setVersion('1.0.0');
    
    strictEqual(Backbone.LocalStorage.getVersion(), '1.0.0');
});

module('prefix');

test('prefix is set', 1, function(){
    Backbone.LocalStorage.setPrefix('app');
    
    strictEqual(Backbone.LocalStorage.getPrefix(), 'app');
});

module('localstorage', {
    setup: function(){
        Backbone.LocalStorage._clear(true);
        Backbone.LocalStorage.setPrefix('app');
    }
});

test('localStorage is cleared', 1, function(){
    localStorage.setItem('test', JSON.stringify({name:'Backbone localStorage'}));
    
    Backbone.LocalStorage._clear(true);
    
    strictEqual(null, localStorage.getItem('test'));
});

test('localStorage is cleared under a prefix', 2, function(){
    localStorage.setItem('test', JSON.stringify({name:'Backbone localStorage'}));
    localStorage.setItem('app:test', JSON.stringify({name:'Backbone localStorage'}));
    
    Backbone.LocalStorage.setPrefix('app');
    Backbone.LocalStorage._clear();
    
    strictEqual('Backbone localStorage', JSON.parse(localStorage.getItem('test')).name);
    strictEqual(null, localStorage.getItem('app:test'));
});

asyncTest('data is set under unknown prefix', 1, function(){
    var object = {
        name: 'Backbone localStorage'
    };
    
    localStorage.setItem('app:test', JSON.stringify(object));
    
    var model = new (Backbone.Model.extend({
        localStorage: {
            id: 'test'
        },
        url: 'http://ignored.com'
    }));
    
    model.fetch({
        success: function(model, response, options){
            deepEqual(response, object);
            start();
        }
    });
});
