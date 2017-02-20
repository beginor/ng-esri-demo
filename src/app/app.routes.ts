import { Ng2StateDeclaration, UIRouterModule } from 'ui-router-ng2';

import { HomeComponent } from './components/home/home.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { SceneViewComponent } from './components/scene-view/scene-view.component';

export const AppStates = UIRouterModule.forRoot({
    useHash: true,
    otherwise: '/home',
    states: [
        { name: 'home', url: '/home', component: HomeComponent },
        { name: 'map-view', url: '/map-view', component: MapViewComponent },
        { name: 'scene-view', url: '/scene-view', component: SceneViewComponent }
    ]
});
