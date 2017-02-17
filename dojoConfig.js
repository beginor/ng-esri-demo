(function (global) {
    'use strict';
    global.dojoConfig = {
        async: true,
        baseUrl: '.',
        packages: [
            { name: 'dgrid', location: 'bower_components/dgrid' },
            { name: 'dijit', location: 'bower_components/dijit' },
            { name: 'dojo', location: 'bower_components/dojo' },
            { name: 'dojox', location: 'bower_components/dojox' },
            { name: 'dstore', location: 'bower_components/dstore' },
            { name: 'moment', location: 'bower_components/moment' },
            { name: 'esri', location: 'bower_components/esri' }
        ]
    };
})(window);
