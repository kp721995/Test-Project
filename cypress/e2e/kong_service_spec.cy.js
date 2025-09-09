import HomePage from '../support/pages/homePage';
import GatewayServicesPage from "../support/pages/gatewayservicePage";
import WorkspacePage from "../support/pages/workspacePage";
import RoutePage from "..//support/pages/routePage";
import ConsumerPage from "../support/pages/consumerPage"
import routeData from "../fixtures//route.json";
import consumerData from "../fixtures//consumer.json";
import serviceData from "../fixtures/fullurlservice.json";
import { randomEightDigitNumber } from "../support/constants"
import { appendTagsWithRandomNumbers } from '../support/utils';

describe('Gateway - Service and Route Creation', () => {

  beforeEach(() => {
    HomePage.visit('/');
  })

  it('creates a full URL service and attaches a route in the default workspace', () => {
    // Navigate to Default Workspace
    WorkspacePage.navigateToDefaultWorkspace();

    // Create Service
    serviceData.name = `${serviceData.name}-${randomEightDigitNumber}`;
    cy.wrap(serviceData.name).as('serviceName');
    GatewayServicesPage.navigateToGatewayServices();
    GatewayServicesPage.openAddGatewayService();
    GatewayServicesPage.createFullUrlService(serviceData);

    // Create Route
    routeData.name = `${routeData.name}-${randomEightDigitNumber}`;
    routeData.tags = appendTagsWithRandomNumbers(routeData.tags);
    RoutePage.createRoute(routeData);

    //Validation 1
    GatewayServicesPage.verifyServicePresenceUsingCypressContext();

    //Validation 2
    GatewayServicesPage.verifyServicePresence(serviceData.name);
  });

  it('creates a consumer', () => {
    WorkspacePage.navigateToDefaultWorkspace();
    ConsumerPage.navigateToConsumers();
    ConsumerPage.openAddConsumer();
    consumerData.username = `${consumerData.username}-${randomEightDigitNumber}`;
    consumerData.custom_id = `${consumerData.custom_id}-${randomEightDigitNumber}`;
    consumerData.tags = appendTagsWithRandomNumbers(consumerData.tags);
    ConsumerPage.createConsumer(consumerData);
    ConsumerPage.verifyConsumerPresense(consumerData.username)
  });
});
