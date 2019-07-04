export const environment = {
    production: true,
    arcgisJsApi: 'https://js.arcgis.com/4.11',
    trustedServers: [
        'http://map.geoq.cn',
        'https://map.geoq.cn',
        '127.0.0.1:4200'
    ],
    dojoConfig: {
        locale: 'zh-cn',
        async: true,
        has: {
            "esri-native-promise": true
        }
    }
};
