Ext.define('alegra.Global', {
    singleton: true,
    config: {
        apiUrl:'http://' + window.location.host + window.location.pathname + 'zend/public/',
    },
    constructor: function (config) {
        this.initConfig(config);
    },
});