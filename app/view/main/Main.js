Ext.define('alegra.view.main.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.main',
    requires: [
        'alegra.view.main.MainController',
        'alegra.view.main.MainModel'
    ],
    controller: 'main',
    viewModel: 'main',
});