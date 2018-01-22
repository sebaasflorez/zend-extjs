Ext.define('alegra.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'alegra.Global'
    ],

    name: 'alegra',
    defaultToken : 'home',
    controllers:[
        'Routes'
    ],
    stores: [],
    launch:function() {
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
