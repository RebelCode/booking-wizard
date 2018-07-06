import humanizeDuration from './humanizeDuration'
import makeMapStore from './makeMapStore'

/**
 * Exposing all utils of application.
 *
 * @since [*next-version*]
 *
 * @param {object} dependencies Dependencies list.
 *
 * @return {object}
 */
export default function (dependencies) {
  return {
    ...humanizeDuration(dependencies),

    /**
     * Function for mapping store fields.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {mapStoreFunction}
     */
    mapStore (container) {
      return makeMapStore(container.lodash.get)
    },

    /**
     * Function for creating datetimes in timezone.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {CreateDatetimeFunction}
     */
    createDatetime (container) {
      return (value, timezone = 'UTC') => {
        const momentFixedTimezoneValue = container.moment.parseZone(value)
        if (timezone.indexOf('UTC') !== 0) {
          return container.moment.tz(momentFixedTimezoneValue, timezone)
        }
        let offset = Number(timezone.replace(/UTC\+?/g, ''))
        return momentFixedTimezoneValue.utcOffset(offset)
      }
    }
  }
}