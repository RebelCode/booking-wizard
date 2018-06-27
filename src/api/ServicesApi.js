/**
 * Services API.
 *
 * @since [*next-version*]
 *
 * @implements {SelectCapable}
 */
export default class ServicesApi {
  /**
   * ServicesApi constructor.
   *
   * @since [*next-version*]
   *
   * @param {string} resourceUrl URL of services resource.
   * @param {HttpClient} httpClient Promise-based http client.
   */
  constructor (resourceUrl, httpClient) {
    this.resourceUrl = resourceUrl
    this.httpClient = httpClient
  }

  /**
   * Select services.
   *
   * @since [*next-version*]
   *
   * @param {object} params Params for retrieving services
   *
   * @return {Promise<any>} Selecting services promise.
   */
  select (params = {}) {
    return this.httpClient.request({
      url: this.resourceUrl,
      method: 'get',
      params
    }).then(response => {
      return response.data.items
    })
  }
}