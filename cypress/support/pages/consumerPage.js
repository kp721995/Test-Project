import { consumerSelectors } from '../../selectors/consumer.css';

class ConsumerPage {
    navigateToConsumers() {
        cy.get(consumerSelectors.navigatorConsumers).click();
    }

    openAddConsumer() {
        const selectors = [
            consumerSelectors.addEmptyStateConsumerButton,
            consumerSelectors.addConsumerButton
        ];

        cy.get(selectors.join(',')).click();
    }

    createConsumer(consumerData) {
        cy.get(consumerSelectors.addConsumerUsername).clear().type(consumerData.username);
        cy.get(consumerSelectors.addConsumerCustomId).clear().type(consumerData.custom_id);
        cy.get(consumerSelectors.addConsumerTags).clear().type(consumerData.tags);
        cy.get(consumerSelectors.submitConsumerButton).click();
    }

    verifyConsumerPresense(consumerUsername) { 
        cy.contains('span', consumerUsername).should('exist');
    }
}

export default new ConsumerPage();