import { gatewaySelectors } from '../../selectors/gatewayservice.css';

class GatewayServicesPage {
    navigateToGatewayServices() {
        cy.get(gatewaySelectors.navigatorGatewayServices).click();
    }

    openAddGatewayService() {
        const selectors = [
            gatewaySelectors.addEmptyStateServiceButton,
            gatewaySelectors.addServiceButton
        ];

        cy.get(selectors.join(',')).click();
    }

    createFullUrlService(serviceData) {
        cy.get(gatewaySelectors.addServiceUrl).clear().type(serviceData.url);
        cy.get(gatewaySelectors.addServiceName).clear().type(serviceData.name);
        cy.get(gatewaySelectors.submitServiceButton).click();
    }

    verifyServicePresenceUsingCypressContext() {
        this.navigateToGatewayServices();
        cy.get('@serviceName').then((name) => {
            cy.contains(name).should('exist');
        });
    }

    verifyServicePresence(serviceName) {
        this.navigateToGatewayServices();
        cy.contains('b', serviceName).should('exist');
    }
}

export default new GatewayServicesPage();