/**
 * Bookings API.
 *
 * @since [*next-version*]
 *
 * @param {string} resourceUrl URL of bookings resource.
 * @param {HttpClient} httpClient Promise-based http client.
 * @param {string} initialTransition Name of initial transition for bookings.
 *
 * @return {object} Map of pure API functions for bookings.
 */
export default function (resourceUrl, httpClient, initialTransition) {
  return {
    /**
     * Create booking.
     *
     * @since [*next-version*]
     *
     * @param {BookableService} service Service that should be booked.
     * @param {BookingSession} session Session that should be booked.
     * @param {string|null} notes Additional notes for booking.
     * @param {string} timezone Timezone name in which booking is created.
     *
     * @return {Promise<any>} Booking creation promise.
     */
    create ({ service, session, notes, timezone }) {
      return httpClient.post(resourceUrl, {
        start: session.start,
        end: session.end,
        service: service.id,
        resource: session.resource,
        transition: initialTransition,
        notes: notes,
        clientTz: timezone,
      })
    }
  }
}