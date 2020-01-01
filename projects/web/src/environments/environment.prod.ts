export const environment = {
    production: true,
    arcgisJsApi: 'https://js.arcgis.com/4.14',
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
