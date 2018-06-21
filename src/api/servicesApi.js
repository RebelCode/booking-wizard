/**
 * Services API.
 *
 * @since [*next-version*]
 *
 * @param {string} resourceUrl URL of services resource.
 * @param {HttpClient} httpClient Promise-based http client.
 *
 * @return {object} Map of pure API functions for services.
 */
export default function (resourceUrl, httpClient) {
  return {
    /**
     * Fetch list of services.
     *
     * @since [*next-version*]
     *
     * @param {object} params Params for retrieving services
     *
     * @return {Promise<any>} Fetching services promise.
     */
    fetch (params = {}) {
      return httpClient.get(resourceUrl, { params })
        .then(response => {
          return response.data.items
        })
    }
  }
}