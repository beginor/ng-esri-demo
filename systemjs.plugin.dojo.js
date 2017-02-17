exports = {
    fetch: function(load, fetch) {
        console.log('load', load);
        let module = load.name.split('!')[0];
        return new Promise(function(resolve) {
            //use dojo's require and then register the module
            debugger;
            window.require([module], function(mod) {
                System.register(module, [], function(exp, idObj) {
                    var result = {
                        setters: [],
                        execute: function() {
                            //Make the name 'default' here as there is only one export per module so it is technically the default.
                            //Import using a default import statement - eg: import Map from 'esri/Map'
                            //It's possible this may only compile using 'system' module type in some IDEs using the official typings file though.
                            exp("default", mod);
                        }
                    };
                    return result;
                });
            });
        });
    }
};
