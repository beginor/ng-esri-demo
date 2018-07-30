export const environment = {
    production: true,
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
