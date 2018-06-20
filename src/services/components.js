/**
 * Components definitions.
 *
 * @since [*next-version*]
 *
 * @return {object} List of components.
 */
export default function (dependencies) {
  return {
    /**
     * Component for selecting session for service.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    'service-session-selector' (container) {
      return dependencies.bookingWizardComponents.CfServiceSessionSelector(
        container.CreateDatetimeCapable,
        container.sessionApi,
        container.config.datetime
      )
    },

    /**
     * Component for selecting session duration.
     *
     * @since [*next-version*]
     *
     * @return {object}
     */
    'session-duration-picker' () {
      return dependencies.bookingWizardComponents.CfSessionDurationPicker()
    },

    /**
     * Component for selecting date when selecting session for service.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    'session-date-picker' (container) {
      return dependencies.bookingWizardComponents.CfSessionDatePicker(
        container.CreateDatetimeCapable,
        container.config.datetime
      )
    },

    /**
     * Component for selecting time when selecting session for service.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    'session-time-picker' (container) {
      return dependencies.bookingWizardComponents.CfSessionTimePicker(
        container.CreateDatetimeCapable,
        container.config.datetime
      )
    },

    /**
     * Datepicker component.
     *
     * @since [*next-version*]
     *
     * @return {object}
     */
    datepicker () {
      return dependencies.datepicker
    }
  }
}
