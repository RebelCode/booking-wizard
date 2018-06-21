import components from './../components'

/**
 * Components definitions.
 *
 * @since [*next-version*]
 *
 * @return {object} List of components.
 */
export default function (dependencies) {
  const appComponents = {
    /**
     * List of app components.
     */
    ...components(dependencies),

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
  return {
    ...appComponents,

    /**
     * List of all registered components.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    components (container) {
      let components = {}
      /*
       * Get all registered components and provide them to
       * Vue root components only if their name is not started
       * with '_' or 'abstract'
       */
      Object.keys(appComponents).filter(key => {
        return key[0] !== '_' && key.indexOf('abstract') === -1
      }).map(key => {
        components[key] = container[key]
      })
      return components
    }
  }
}
