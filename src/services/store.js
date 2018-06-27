import store from './../store/service'

/**
 * Store definitions.
 *
 * @since [*next-version*]
 *
 * @return {object} Application store service.
 */
export default function (dependencies) {
  return {
    /**
     * Application store.
     */
    ...store(dependencies)
  }
}
