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
    }
  }
}