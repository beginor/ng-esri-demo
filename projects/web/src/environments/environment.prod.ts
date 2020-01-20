export const environment = {
    production: true,
    arcgisJsApi: 'https://app.gdeei.cn/arcgis-js-api/library/4.14',
    trustedServers: [
        'www.arcgis.com',
        'www.arcgisonline.cn'
    ],
    dojoConfig: {
        has: {
            'esri-native-promise': true
        },
        locale: 'zh-cn',
        async: true
    }
};
