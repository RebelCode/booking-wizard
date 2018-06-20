import CfEddbkWizard from './CfEddbkWizard'
import CfServiceStep from './CfServiceStep'
import CfSessionStep from './CfSessionStep'
import CfConfirmationStep from './CfConfirmationStep'

/**
 * Components definitions.
 *
 * @since [*next-version*]
 *
 * @return {object} List of components.
 */
export default function () {
  return {
    /**
     * Main EDDBK wizard component.
     *
     * @since [*next-version*]
     *
     * @return {object}
     */
    'eddbk-wizard' () {
      return CfEddbkWizard()
    },

    /**
     * Component for selecting service in wizard.
     *
     * @since [*next-version*]
     *
     * @return {object}
     */
    'service-step' (container) {
      return CfServiceStep(container.VModelProxy)
    },

    /**
     * Component for selecting session in wizard.
     *
     * @since [*next-version*]
     *
     * @return {object}
     */
    'session-step' (container) {
      return CfSessionStep(container.VModelProxy)
    },

    /**
     * Confirmation step component in wizard.
     *
     * @since [*next-version*]
     *
     * @return {object}
     */
    'confirmation-step' (container) {
      return CfConfirmationStep(container.VModelProxy)
    }
  }
}
