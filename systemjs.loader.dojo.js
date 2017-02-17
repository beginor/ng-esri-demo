exports.fetch = function(load) {
    var name = load.name;
    return new Promise(function(resolve) {
        var dojoName = convertToDojoModule(name);
        window.require([dojoName], function(mod) {
            SystemJS.register(dojoName, [], function (exp, idObj) {
                return {
                    setters: [],
                    execute: function() {
                        exp("default", mod);
                    }
                };
            });
            resolve('');
        });
    });
};

exports.instantiate = function (load) {
    var name = load.name.split('!')[0];
    var dojoName = convertToDojoModule(name);
    return new Promise(function (resolve) {
        // Since module is loaded by fetch, just require it again,
        // dojo require does not load the module again.
        window.require([dojoName], function (module) {
            resolve(module);
        });
    });
};

function convertToDojoModule(module) {
    // we just replace SystemJS.baseURL with '';
    return module.replace(SystemJS.baseURL, '');
}
