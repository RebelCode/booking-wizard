import bookingsApi from './bookingsApi'
import servicesApi from './servicesApi'

/**
 * Creates api services definitions.
 *
 * @since [*next-version*]
 *
 * @param {object} dependencies List of dependencies.
 *
 * @return {object} List of api services definitions.
 */
export default function (dependencies) {
  return {
    /**
     * Wrapper for interacting with bookings API.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    bookingsApi (container) {
      return bookingsApi(container.config.bookingsResourceUrl, container.httpClient)
    },

    /**
     * Wrapper for interacting with services API.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    servicesApi (container) {
      return servicesApi(container.config.servicesResourceUrl, container.httpClient)
    }
  }
}
