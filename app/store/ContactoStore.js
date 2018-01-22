Ext.define('alegra.store.ContactoStore', {
    extend: 'Ext.data.Store',
    alias: 'store.contacto',
    model: 'alegra.model.ContactoModel',  
    autoLoad: true,
    pageSize: 5,

    proxy: {
        type: 'ajax',
        api:{
            //read: alegra.Global.getApiUrl() + 'index/getall',
            read:'zend/public/index/getall',
            destroy:'zend/public/index/delete',
            create: 'zend/public/index/store',
            update: 'zend/public/index/update'
        },
        reader: {
            type: 'json',
            successProperty: 'success'
        }
    }
});
