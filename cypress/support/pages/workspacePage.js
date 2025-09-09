import { workspaceSelectors } from '../../selectors/workspace.css';

class WorkspacePage {
    navigateToDefaultWorkspace() {
        cy.get(workspaceSelectors.defaultWorkspace).click();
    }
}

export default new WorkspacePage();