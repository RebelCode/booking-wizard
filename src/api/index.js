import BookingsApi from './BookingsApi'
import ServicesApi from './ServicesApi'

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
     * @return {CreateAble}
     */
    bookingsApi (container) {
      return new BookingsApi(container.config.bookingsResourceUrl, container.httpClient, container.config.initialBookingTransition)
    },

    /**
     * Wrapper for interacting with services API.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {SelectAble}
     */
    servicesApi (container) {
      return new ServicesApi(container.config.servicesResourceUrl, container.httpClient)
    }
  }
}
