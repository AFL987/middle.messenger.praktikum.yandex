import template from './page404.tmpl';
import Page404 from './page404';
import NavigationPanel from "../../components/navigation-panel";

new Page404({
    title: 'page404',
    template: template,
		children: {
			navigationPanel: new NavigationPanel().getContent(),
		}
});
