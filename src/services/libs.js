/**
 * Creates libs definitions.
 *
 * @since [*next-version*]
 *
 * @param {object} dependencies List of dependencies.
 *
 * @return {object} List of libs definitions.
 */
export default function (dependencies) {
  return {
    /**
     * The VueJS constructor.
     *
     * @since [*next-version*]
     *
     * @return {Vue}
     */
    vue () {
      const Vue = dependencies.vue
      Vue.use(dependencies.uiFramework.Core.InjectedComponents)
      return Vue
    },

    /**
     * Vuex.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {Vuex}
     */
    vuex (container) {
      let Vue = container.vue,
        Vuex = dependencies.vuex
      Vue.use(Vuex)
      return Vuex
    },

    /**
     * Http client.
     *
     * @since [*next-version*]
     *
     * @return {HttpClient}
     */
    httpClient () {
      return dependencies.axios
    },

    /**
     * Moment JS.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {Moment}
     */
    moment (container) {
      const moment = dependencies.momentTimezone
      return dependencies.momentRange.extendMoment(moment)
    },

    /**
     * Humanize duration library.
     *
     * @since [*next-version*]
     *
     * @return {humanizeDuration}
     */
    humanizeDuration () {
      return dependencies.humanizeDuration
    },

    /**
     * Transformer for reading sessions.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {SessionReadTransformer}
     */
    sessionReadTransformer(container) {
      return new dependencies.bookingWizardComponents.SessionReadTransformer(container.moment)
    },

    /**
     * Hash function implementation.
     *
     * @since [*next-version*]
     *
     * @return {Function}
     */
    hashFunction () {
      return dependencies.sha1
    },

    /**
     * Request cache.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {RequestCache}
     */
    requestCache (container) {
      return new dependencies.stdLib.RequestCache(container.hashFunction)
    },

    /**
     * Range cache.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {RangeCache}
     */
    rangeCache (container) {
      return new dependencies.bookingWizardComponents.RangeCache(container.moment, container.differenceWith, container.isEqual)
    },

    /**
     * Function for finding difference between two arrays.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {Function}
     */
    differenceWith (container) {
      return container.lodash.differenceWith
    },

    /**
     * Function for checking that object are equal.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {Function}
     */
    isEqual (container) {
      return container.lodash.isEqual
    },

    /**
     * Lodash library.
     *
     * @since [*next-version*]
     *
     * @return {lodash}
     */
    lodash () {
      return dependencies.lodash.noConflict()
    },

    /**
     * Text formatter.
     *
     * @since [*next-version*]
     *
     * @return {Function}
     */
    textFormatter () {
      return dependencies.textFormatter.vsprintf
    },

    /**
     * Format translator.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {FormatTranslator}
     */
    translator (container) {
      return new dependencies.uiFramework.I18n.FormatTranslator(
        container.textFormatter
      )
    },

    /**
     * Function for translating strings with params.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {Function}
     */
    translate (container) {
      return function (format, params) {
        return container.translator.translate(format, params)
      }
    },
  }
}
