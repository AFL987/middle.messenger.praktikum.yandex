import Route from '../route';

export class Router {
	routes: Route[] | undefined;
	history: History;
	_currentRoute: Route | undefined | null;
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

	use(pathname: string, view: any): this {
		const route = new Route(pathname, view, {rootQuery: this._rootQuery});
		this.routes?.push(route);
		return this;
	}

	start(): void {
		window.onpopstate = () => {
			this._onRoute(document.location.pathname);
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
		route?.render();
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

	getRoute(pathname: string): Route | undefined {
		return this.routes?.find((route) => route.match(pathname));
	}
}