Ext.define('alegra.controller.Routes', {
    extend : 'Ext.app.Controller',
    requires: [
        'alegra.view.contacto.ContactoGrid',
        'alegra.view.contacto.ContactoForm'

    ],
    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },
    routes : {
        'home' : {
            action : 'onHome'
        }
    },
    onUnmatchedRoute: function () {
        this.redirectTo('home', false);
    },
    onHome:function() {
       Ext.widget('gridContacto');

    }
});
