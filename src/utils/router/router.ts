import Block from '../block';
import Route from '../route';

export class Router {
    routes: Route[] = [];
    history: History;
    _currentRoute: Route | null;
    _rootQuery = 'app';
    static __instance: Router;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: Block): this {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

    start(): void {
        window.onpopstate = (event: PopStateEvent) => {
            this._onRoute(event.currentTarget.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string): void {
        const route = this.getRoute(pathname);
        if (!route) {
            this.go('/404');
            window.location.href = '/404';
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render(route, pathname);
    }

    go(pathname: string): void {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back(): void {
        history.back();
    }

    forward(): void {
        history.forward();
    }

    getRoute(pathname: string): Route {
        return this.routes.find(route => route.match(pathname));
    }
}
