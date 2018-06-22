import humanizeDuration from './humanizeDuration'

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
    ...humanizeDuration(dependencies)
  }
}