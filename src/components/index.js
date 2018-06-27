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
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    'eddbk-wizard' (container) {
      console.info('container.config.bookingDataMap', container.config.bookingDataMap)
      return CfEddbkWizard(
        container.store,
        container.config.bookingDataMap,
        container.TranslateCapable,
        container.MapBookingFieldsCapable,
      )
    },

    /**
     * Component for selecting service in wizard.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    'service-step' (container) {
      return CfServiceStep(
        container.VModelProxy,
        container.TranslateCapable,
        container.MapBookingFieldsCapable,
      )
    },

    /**
     * Component for selecting session in wizard.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    'session-step' (container) {
      return CfSessionStep(
        container.VModelProxy,
        container.TranslateCapable,
        container.MapBookingFieldsCapable,
      )
    },

    /**
     * Confirmation step component in wizard.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    'confirmation-step' (container) {
      return CfConfirmationStep(
        container.TranslateCapable,
        container.CreateDatetimeCapable,
        container.MapBookingFieldsCapable,
        container.config.datetime
      )
    }
  }
}
