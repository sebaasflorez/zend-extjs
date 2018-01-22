Ext.define('alegra.view.contacto.ContactoGrid',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridContacto',
    requires: [
        'alegra.view.contacto.ContactoController',
        'alegra.store.ContactoStore'
    ],
    controller:'contacto',
    title: 'Contactos',
    store: {
        type: 'contacto'
    },
    width: 850,
    height: 600,
    columns: [
        { text: 'Codigo', dataIndex: 'id',  width: 80, align: 'center'},
        { text: 'Nombre', dataIndex: 'name',  width: 200,  align: 'center'},
        { text: 'NIT', dataIndex: 'identification', width: 150,  align: 'center'},
        { text: 'Teléfono 1', dataIndex: 'phonePrimary', width: 150,  align: 'center'},
        { text: 'Observaciones ', dataIndex: 'observations',  width: 150,  align: 'center'},
        {
            xtype: 'actioncolumn',
            text:'Acciones',
            align: 'center',
            items: [{
                tooltip: 'Editar',
                icon: 'resources/images/page_edit.png',
                handler:'onEdit'
            }, {
                tooltip: 'Delete',
                icon: 'resources/images/delete.png',
                handler: 'onDelete'
            }]
            }
    ],
    listeners: {
        select: 'onItemSelected'
    },
    dockedItems: [{
                    xtype: 'pagingtoolbar',
                    store: {
                        type: 'contacto'
                    },   
                    dock: 'bottom',
                    displayInfo: true,
                    displayMsg: 'Mostrando Contactos {0} - {1} de {2}',
                    emptyMsg: "Ningún Contacto Encontrado."
                },{
                    xtype: 'toolbar',
                    items: [{
                                text: 'Nuevo Contacto',
                                tooltip: 'Agregar Contacto',
                                handler:'onAdd'

                            }]
                }],
    renderTo: Ext.getBody()
});