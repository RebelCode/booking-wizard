import api from './../api'

/**
 * Creates APIs definitions.
 *
 * @since [*next-version*]
 *
 * @param {object} dependencies List of dependencies.
 *
 * @return {object} List of APIs definitions.
 */
export default function (dependencies) {
  return {
    /**
     * List of all app APIs.
     */
    ...api(dependencies),

    /**
     * Sessions API.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {SessionApi}
     */
    sessionApi (container) {
      return new dependencies.bookingWizardComponents.SessionApi(
        container.httpClient,
        container.config.endpoints.sessions,
        container.requestCache,
        container.rangeCache,
        container.sessionReadTransformer,
        container.moment
      )
    },
  }
}
