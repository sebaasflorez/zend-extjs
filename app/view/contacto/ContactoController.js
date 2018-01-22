Ext.define('alegra.view.contacto.ContactoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacto',

    onItemSelected: function (sender, record) {
    	console.log(record);
    },

    onAdd:function() {
    	Ext.widget('contactoForm');
		
    },

    onDelete: function(grid, rowIndex, colIndex){
    	var rec = grid.getStore().getAt(rowIndex);
        console.log(grid.getStore().removeAt(rowIndex));
        grid.getStore().sync(); 
    },

    onEdit: function(grid, rowIndex, colIndex){
    	var record = grid.getStore().getAt(rowIndex);
        console.log(record.get('id'));

         var edit = Ext.create('alegra.view.contacto.ContactoForm').show();
        
        if(record){
        	edit.down('form').loadRecord(record);
        }
    },
     onSubmit:function(btn) {

        var  me = this, 
        win = btn.up('window'), 
        form = me.lookupReference('contactoForm');
        record = form.getRecord(),
        values = form.getValues();
        if (values.name=='') {
            Ext.Msg.alert('Error', 'Debe ingresar por lo menos el nombre.', Ext.emptyFn);
        }else{

            var grid = Ext.ComponentQuery.query('gridContacto')[0];
            var nuevo = false;
            if (values.id > 0 ) {
                 record.set(values);
            }else{
                record = Ext.create('alegra.model.ContactoModel');
                record.set(values);
                grid.getStore().add(record);
                nuevo = true;
            }

            win.close();
            grid.getStore().sync();

            if (nuevo) {
                grid.getStore().load();
            }
        }
    }
});
