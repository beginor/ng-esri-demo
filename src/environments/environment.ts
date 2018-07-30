// The file contents for the current environment will overwrite these during
// build. The build system defaults to the dev environment which uses
// `environment.ts`, but if you do `ng build --env=prod` then
// `environment.prod.ts` will be used instead. The list of which env maps to
// which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    arcgisJsApi: 'https://js.arcgis.com/4.8',
    corsEnabledHosts: [
        { host: 'map.geoq.cn', withCredentials: true },
        { host: 'map.geoq.cn:443', withCredentials: true },
        '127.0.0.1:4200'
    ],
    dojoConfig: {
        locale: 'zh-cn',
        async: true
    }
};
