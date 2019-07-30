export const environment = {
    production: true,
    arcgisJsApi: 'https://js.arcgis.com/4.12',
    trustedServers: [
        'www.arcgis.com',
        'www.arcgisonline.cn'
    ],
    dojoConfig: {
        locale: 'zh-cn',
        async: true,
        has: {
            'esri-native-promise': true
        }
    }
};
