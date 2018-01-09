import { EsriLoaderOptions } from 'ng-esri-service';

export function createEsriLoaderOptions(): EsriLoaderOptions {
    const options: EsriLoaderOptions = {
        url: 'https://js.arcgis.com/4.6/init.js',
        dojoConfig: {
            locale: 'zh-cn',
            async: true
        },
        corsEnabledHosts: [
            { host: 'map.geoq.cn', withCredentials: true },
            { host: 'map.geoq.cn:443', withCredentials: true }
        ]
    };
    return options;
}
