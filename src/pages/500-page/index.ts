import template from './page500.tmpl';
import Page500 from './page500';
import NavigationPanel from "../../components/navigation-panel";

new Page500({
    title: 'page500',
    template: template,
		children: {
			navigationPanel: new NavigationPanel().getContent(),
		}
});
