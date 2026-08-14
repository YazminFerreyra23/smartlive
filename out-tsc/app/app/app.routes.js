import { LandingComponent } from './landing/landing.component';
export const routes = [
    {
        path: '',
        component: LandingComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
//# sourceMappingURL=app.routes.js.map