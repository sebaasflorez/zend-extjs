Ext.define('alegra.view.contacto.ContactoForm', {
    extend: 'Ext.window.Window',
    alias:'widget.contactoForm',
    requires: [
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.layout.container.Fit'
    ],
    controller: 'contacto',
    autoShow: true,
    height: 550,
    width: 375,
    modal:true,
    resizable:true,
    movable:false,
    closable:false,
    title: 'Contacto',
    iconCls:'x-fa fa-user',
    layout:'fit',
    items:[
        {
            xtype: 'form',
            bodyPadding: 10,
            reference:'contactoForm',
            defaults:{
                labelWidth:120
            },
            items: [
                {
                    xtype: 'textfield',
                    name : 'id',
                    fieldLabel: 'id',
                    hidden:true
                },{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Nombre',
                    name:'name',
                    allowBlank:false,
                    margin:'0 0 20 0'
                },{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'NIT',
                    name:'identification',
                    margin:'0 0 20 0'
                },{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Correo electrónico',
                    name:'email',
                    margin:'0 0 20 0'
                },{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Teléfono 1',
                    name:'phonePrimary',
                    margin:'0 0 20 0'
                },{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Teléfono 2',
                    name:'phoneSecondary',
                    margin:'0 0 20 0'
                },{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Fax',
                    name:'fax',
                    margin:'0 0 20 0'
                },{
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Celular',
                    name:'mobile',
                    margin:'0 0 20 0'
                },{
                    xtype: 'textarea',
                    anchor: '100%',
                    fieldLabel: 'Observaciones',
                    name:'observations',
                    margin:'0 0 20 0'
                }
            ]
        }
    ],
    dockedItems:[
        {
            xtype:'toolbar',
            dock:'bottom',
            items:[
                {
                    xtype:'button',
                    text:'Aceptar',
                    handler:'onSubmit'
                }
            ]

        }
    ]
});