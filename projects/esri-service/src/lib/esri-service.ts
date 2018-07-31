import { loadModules } from 'esri-loader';

const sceneViewResolvers: Function[] = [];
let sceneView: __esri.SceneView;
const mapViewResolvers: Function[] = [];
let mapView: __esri.MapView;

export function getSceneView(): Promise<__esri.SceneView> {
    const promise = new Promise<__esri.SceneView>((resolve, reject) => {
        if (sceneView) {
            resolve(sceneView);
            return;
        }
        sceneViewResolvers.push(resolve);
    });
    return promise;
}

export function setSceneView(view: __esri.SceneView) {
    sceneView = view;
    if (sceneViewResolvers.length > 0) {
        sceneViewResolvers.forEach(resolve => {
            resolve(sceneView);
        });
        sceneViewResolvers.length = 0;
    }
}

export function getMapView(): Promise<__esri.MapView> {
    const promise = new Promise<any>((resolve, reject) => {
        if (mapView) {
            resolve(mapView);
            return;
        }
        mapViewResolvers.push(resolve);
    });
    return promise;
}

export function setMapView(view: __esri.MapView) {
    mapView = view;
    if (mapViewResolvers.length > 0) {
        mapViewResolvers.forEach(resolve => {
            resolve(mapView);
        });
        mapViewResolvers.length = 0;
    }
}

export async function createBasemapFromId(
    basemapId: string
): Promise<__esri.Basemap> {
    const [Basemap] = await loadModules([
        'esri/Basemap'
    ]);
    const basemap: __esri.Basemap = Basemap.fromId(basemapId);
    return basemap;
}

export async function createMap(
    props: __esri.MapProperties
): Promise<__esri.Map> {
    const [Map] = await loadModules([
        'esri/Map'
    ]);
    const map = new Map(props);
    return map;
}

export async function createMapView(
    props: __esri.MapViewProperties
): Promise<__esri.MapView> {
    const [MapView] = await loadModules([
        'esri/views/MapView'
    ]);
    const view: __esri.MapView = new MapView(props);
    return view;
}

export async function createSceneView(
    props: __esri.SceneViewProperties
): Promise<__esri.SceneView> {
    const [SceneView] = await loadModules([
        'esri/views/SceneView'
    ]);
    const view: __esri.SceneView = new SceneView(props);
    return view;
}

export async function createLocalSource(
    props: __esri.BasemapProperties[]
): Promise<__esri.LocalBasemapsSource> {
    const basemapArr: __esri.Basemap[] = [];
    // tslint:disable-next-line:max-line-length
    const [Basemap, LocalBasemapsSource] = await loadModules([
        'esri/Basemap',
        'esri/widgets/BasemapGallery/support/LocalBasemapsSource'
    ]);
    //
    for (const prop of props) {
        const basemap = new Basemap(prop);
        basemapArr.push(basemap);
    }
    const localSource = new LocalBasemapsSource({
        basemaps: basemapArr
    });
    return localSource;
}

export async function createBasemapsGallery(
    galleryProperties: __esri.BasemapGalleryProperties,
    expandPropertis: __esri.ExpandProperties
): Promise<__esri.Expand> {
    const [Expand, BasemapGallery] = await loadModules([
        'esri/widgets/Expand',
        'esri/widgets/BasemapGallery'
    ]);
    galleryProperties.container = document.createElement('div');
    const gallery = new BasemapGallery(galleryProperties);
    expandPropertis.content = gallery.domNode;
    const expand = new Expand(expandPropertis);
    return expand;
}

export async function executeQuery(
    serviceUrl: string,
    query: __esri.QueryProperties | __esri.Query,
    requestOptions?: any
): Promise<__esri.FeatureSet> {
    const [QueryTask] = await loadModules(['esri/tasks/QueryTask']);
    const queryTask: __esri.QueryTask = new QueryTask({
        url: serviceUrl
    });
    const result = await queryTask.execute(query);
    return result;
}

export async function createGraphic(
    graphicProps?: __esri.GraphicProperties
): Promise<__esri.Graphic> {
    const [Graphic] = await loadModules([
        'esri/Graphic'
    ]);
    return new Graphic(graphicProps);
}

export async function findViewForLayer<
    TLayer extends __esri.Layer,
    TLayerView extends __esri.LayerView
>(
    view: __esri.View,
    layer: TLayer
): Promise<TLayerView> {
    const layerView = (await view.whenLayerView(layer)) as TLayerView;
    return layerView;
}

export async function buffer(
    geometryServiceUrl: string,
    props: __esri.BufferParametersProperties
): Promise<__esri.Polygon[]> {
    const [GeometryService, BufferParameters] = await loadModules([
        'esri/tasks/GeometryService',
        'esri/tasks/support/BufferParameters'
    ]);
    const geoSvc: __esri.GeometryService
        = new GeometryService({ url: geometryServiceUrl });
    const params: __esri.BufferParameters = new BufferParameters(
        props
    );
    const result = await geoSvc.buffer(params);
    return result;
}

export async function queryLayerFeatures(
    layer: __esri.FeatureLayer,
    queryProps: __esri.QueryProperties
): Promise<__esri.FeatureSet> {
    const query = layer.createQuery();
    Object.assign(query, queryProps);
    return await layer.queryFeatures(query);
}

/**
 * 查询图层在地图视图上显示的图形
 * @param view scene view
 * @param layer feature layer
 * @param where definitionExpression of the feature layer
 */
export function queryLayerGraphics(
    view: __esri.SceneView,
    layer: __esri.FeatureLayer,
    where: string
): Promise<__esri.FeatureSet> {
    return new Promise<__esri.FeatureSet>((resolve, reject) => {
        view.whenLayerView(layer)
            .then((layerView: __esri.FeatureLayerView) => {
                if (where === layer.definitionExpression) {
                    layerView.queryFeatures()
                        .then((featureSet: __esri.FeatureSet) => {
                            resolve(featureSet);
                        })
                        .catch(err => {
                            reject(err);
                        });
                }
                else {
                    const handle = layerView.watch('updating', val => {
                        if (!val) {
                            layerView.queryFeatures()
                                .then((featureSet: __esri.FeatureSet) => {
                                    handle.remove();
                                    resolve(featureSet);
                                })
                                .catch(err => {
                                    handle.remove();
                                    reject(err);
                                });
                        }
                    });
                    layer.definitionExpression = where;
                }
            })
            .catch(ex => {
                reject(ex);
            });
    });
}

export async function parseRendererFromJSON<
    T extends __esri.Renderer
>(
    json: any
): Promise<T> {
    const [jsonUtils] = await loadModules([
        'esri/renderers/support/jsonUtils'
    ]);
    return jsonUtils.fromJSON(json);
}

export async function createSimpleLineSymbol(
    color: string | number[],
    width: number,
    style: string
): Promise<__esri.SimpleLineSymbol> {
    const [SimpleLineSymbol, Color] = await loadModules([
        'esri/symbols/SimpleLineSymbol',
        'esri/Color'
    ]);
    return new SimpleLineSymbol({
        color: new Color(color),
        width,
        style: 'short-dot'
    });
}

export async function createSimpleFillSymbol(
    color: number[],
    styles: string,
    out: any
): Promise<__esri.SimpleFillSymbol> {
    const [SimpleFillSymbol, Color] = await loadModules([
        'esri/symbols/SimpleFillSymbol',
        'esri/Color'
    ]);
    return new SimpleFillSymbol({
        color: new Color(color),
        style: styles,
        outline: out
    });
}

export async function parseWebSceneFromJSON(
    json: any
): Promise<__esri.WebScene> {
    const [WebScene] = await loadModules([
        'esri/WebScene'
    ]);
    const scene: __esri.WebScene = WebScene.fromJSON(json);
    return scene;
}

export async function webMercatorToGeographic(
    extent: __esri.Geometry
): Promise<__esri.Geometry> {
    const [webMercatorUtils] = await loadModules([
        'esri/geometry/support/webMercatorUtils'
    ]);
    return webMercatorUtils.webMercatorToGeographic(extent);
}

export async function createSlideFromView(
    view: any,
    options?: any
): Promise<__esri.Slide> {
    const [Slide] = await loadModules([
        'esri/webscene/Slide'
    ]);
    return Slide.createFrom(view, options);
}

export async function createExtent(
    extentProperties: __esri.ExtentProperties
): Promise<__esri.Extent> {
    const [Extent] = await loadModules([
        'esri/geometry/Extent'
    ]);
    return new Extent(extentProperties);
}

export async function createPoint(
    pointProps: __esri.PointProperties
): Promise<__esri.Point> {
    const [Point] = await loadModules([
        'esri/geometry/Point'
    ]);
    return new Point(pointProps);
}

export async function createPointSymbol3D(
    pointSymbol3DProps: __esri.PointSymbol3DProperties
): Promise<__esri.PointSymbol3D> {
    const [PointSymbol3D] = await loadModules([
        'esri/symbols/PointSymbol3D'
    ]);
    return new PointSymbol3D(pointSymbol3DProps);
}

export async function createIconSymbol3DLayer(
    iconSymbol3DLayerProps: __esri.IconSymbol3DLayerProperties
): Promise<__esri.IconSymbol3DLayer> {
    const [IconSymbol3DLayer] = await loadModules([
        'esri/symbols/IconSymbol3DLayer'
    ]);
    return new IconSymbol3DLayer(iconSymbol3DLayerProps);
}

export async function createPopupTemplate(
    popupTemplateProps: __esri.PopupTemplateProperties
): Promise<__esri.PopupTemplate> {
    const [PopupTemplate] = await loadModules([
        'esri/PopupTemplate'
    ]);
    return new PopupTemplate(popupTemplateProps);
}

export function getViewResolution(view: __esri.SceneView): number {
    const mapWidth = view.extent.width;
    const viewWidth = view.width;
    const resoluation = Math.ceil(mapWidth / viewWidth);
    return resoluation;
}

export async function createActionButton(
    actionProperties: any
): Promise<__esri.ActionButton> {
    const [ActionButton] = await loadModules([
        'esri/support/actions/ActionButton'
    ]);
    return new ActionButton(actionProperties);
}

export async function createField(
    fieldProperties?: __esri.FieldProperties
): Promise<__esri.Field> {
    const [Field] = await loadModules([
        'esri/layers/support/Field'
    ]);
    return new Field(fieldProperties);
}

export async function parseLabelClassFromJSON(
    json: any
): Promise<__esri.LabelClass> {
    const [LabelClass] = await loadModules([
        'esri/layers/support/LabelClass'
    ]);
    return LabelClass.fromJSON(json);
}

export async function parseSymbolFromJson<T extends __esri.Symbol>(
    json: any
): Promise<T> {
    const [jsonUtils] = await loadModules([
        'esri/symbols/support/jsonUtils'
    ]);
    return jsonUtils.fromJSON(json);
}

export async function createColor(
    colorProperties: any
): Promise<__esri.Color> {
    const [Color] = await loadModules([
        'esri/Color'
    ]);
    return new Color(colorProperties);
}

export async function parsePresentationFromJSON(
    json: any
): Promise<__esri.Presentation> {
    const [Presentation] = await loadModules([
        'esri/webscene/Presentation'
    ]);
    return Presentation.fromJSON(json);
}

export async function createLegend(
    legendProps: __esri.LegendProperties,
    expandProps: __esri.ExpandProperties
): Promise<__esri.Expand> {
    const [Expand, Legend] = await loadModules([
        'esri/widgets/Expand',
        'esri/widgets/Legend'
    ]);
    legendProps.container = document.createElement('div');
    const legend = new Legend(legendProps);
    expandProps.view = legendProps.view;
    expandProps.content = legend.domNode;
    const expand: __esri.Expand = new Expand(expandProps);
    return expand;
}

export async function createImageryLayer(
    props: __esri.ImageryLayerProperties
): Promise<__esri.ImageryLayer> {
    const [ImageryLayer] = await loadModules([
        'esri/layers/ImageryLayer'
    ]);
    const layer: __esri.ImageryLayer = new ImageryLayer(props);
    return layer;
}

export async function createMapImage(
    props: __esri.MapImageProperties
): Promise<__esri.MapImage> {
    const [MapImage] = await loadModules([
        'esri/layers/support/MapImage'
    ]);
    const image: __esri.MapImage = new MapImage(props);
    return image;
}

export async function createMapImageLayer(
    props: __esri.MapImageLayerProperties
): Promise<__esri.MapImageLayer> {
    const [MapImageLayer] = await loadModules([
        'esri/layers/MapImageLayer'
    ]);
    const layer: __esri.MapImageLayer = new MapImageLayer(props);
    return layer;
}

export async function createGraphicsLayer(
    props: __esri.GraphicsLayerProperties
): Promise<__esri.GraphicsLayer> {
    const [GraphicsLayer] = await loadModules([
        'esri/layers/GraphicsLayer'
    ]);
    const layer: __esri.GraphicsLayer = new GraphicsLayer(props);
    return layer;
}

export async function createWebTileLayer(
    props: __esri.WebTileLayerProperties
): Promise<__esri.WebTileLayer> {
    const [WebTileLayer] = await loadModules([
        'esri/layers/WebTileLayer'
    ]);
    const layer: __esri.WebTileLayer = new WebTileLayer(props);
    return layer;
}

export async function createBasemap(
    props: __esri.BasemapProperties
): Promise<__esri.Basemap> {
    const [Basemap] = await loadModules([
        'esri/Basemap'
    ]);
    const basemap: __esri.Basemap = new Basemap(props);
    return basemap;
}

export async function createFeatureLayer(
    props: __esri.FeatureLayerProperties
): Promise<__esri.FeatureLayer> {
    const [FeatureLayer] = await loadModules([
        'esri/layers/FeatureLayer'
    ]);
    const layer: __esri.FeatureLayer = new FeatureLayer(props);
    return layer;
}

export async function parseFeatureSetFromJson(
    json: any
): Promise<__esri.FeatureSet> {
    const [FeatureSet] = await loadModules([
        'esri/tasks/support/FeatureSet'
    ]);
    const result: __esri.FeatureSet = FeatureSet.fromJSON(json);
    return result;
}

export async function createCollection<T>(
    items: T[]
): Promise<__esri.Collection<T>> {
    const [Collection] = await loadModules([
        'esri/core/Collection'
    ]);
    const result: __esri.Collection = new Collection(items);
    return result;
}

export async function createTileLayer(
    props: __esri.TileLayerProperties
): Promise<__esri.TileLayer> {
    const [TileLayer] = await loadModules([
        'esri/layers/TileLayer'
    ]);
    const result: __esri.TileLayer = new TileLayer(props);
    return result;
}
