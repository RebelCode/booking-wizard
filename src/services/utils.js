import utils from './../utils'

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
    ...utils(dependencies)
  }
}