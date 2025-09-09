import { randomEightDigitNumber } from "../constants"
import { routeSelectors } from '../../selectors/route.css';

class RoutePage {

    createRoute(routeData) {
        cy.contains('button', ' Add a Route ').click();
        cy.get(routeSelectors.addRouteName).clear().type(routeData.name);
        cy.get(routeSelectors.addRouteTags).clear().type(routeData.tags);
        cy.get(routeSelectors.routeAdvanceConfig).click();
        cy.get(routeSelectors.addRoutePath).clear().type(routeData.paths);
        cy.contains('div', 'Select methods').click();
        cy.get(routeSelectors.addMethodGet).click();
        cy.get(routeSelectors.addRouteHost).clear().type(routeData.hosts);
        cy.get(routeSelectors.addRouteHeaderName).clear().type(routeData.headers.name);
        cy.get(routeSelectors.addRouteHeaderValue).clear().type(routeData.headers.value);
        cy.get(routeSelectors.addRouteSnis).clear().type(routeData.snis);
        cy.get(routeSelectors.submitRouteButton).click();
    }
}

export default new RoutePage();