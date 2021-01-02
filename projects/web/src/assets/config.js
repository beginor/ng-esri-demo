Object.assign(window,  {
  arcgisJsApi: 'https://app.gdeei.cn/arcgis-js-api/library/4.17',
  dojoConfig: {
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
  },
  esriConfig = {
    locale: 'zh-cn'
  }
});
