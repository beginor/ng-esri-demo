export const environment = {
    production: true,
    arcgisJsApi: 'https://app.gdeei.cn/arcgis-js-api/library/4.15',
    trustedServers: [
        'www.arcgis.com',
        'www.arcgisonline.cn'
    ],
    dojoConfig: {
        has: {
            'esri-native-promise': true
        },
        locale: 'zh-cn',
        async: true,
        packages: [
            {
                name: 'THREE',
                location: 'https://app.gdeei.cn/arcgis-js-api/three/build/',
                main: 'three.min'
            },
            {
                name: 'beginor',
                location: 'https://app.gdeei.cn/arcgis-js-api/beginor/'
            }
        ]
    }
};
