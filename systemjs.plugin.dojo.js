// loader for esri arcgis js api

exports.fetch = function(load) {
    var module = load.name.split('!')[0];
    return new Promise(function(resolve) {
        var dojoModule = convertToDojoModule(module);
        // make sure window.require is dojo/require
        window.require([dojoModule], function(mod) {
            resolve('code is by dojo loader.');
        });
    });
};

exports.instantiate = function (load) {
    var module = load.name.split('!')[0];
    var dojoModule = convertToDojoModule(module);
    return new Promise(function (resolve) {
        // Since module is loaded by fetch, just require it again,
        // dojo require does not load the module again.
        window.require([dojoModule], function (mod) {
            resolve(mod);
        });
    });
};

function convertToDojoModule(module) {
    // we just replace System.baseURL with '';
    return module.replace(System.baseURL, '');
}
