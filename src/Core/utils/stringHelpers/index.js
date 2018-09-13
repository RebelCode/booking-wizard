/**
 * String helping utils.
 *
 * @since [*next-version*]
 *
 * @param {object} dependencies Dependencies list.
 *
 * @return {object}
 */
export default function (dependencies) {
  return {
    'kebabToCamelCase' () {
      /**
       * Transform kebab cased string to camel cased string.
       *
       * @since [*next-version*]
       *
       * @param {string} kebabString String in kebab case that should be transformed to camel case.
       *
       * @return {string} Camel cased string.
       */
      return kebabString => kebabString.replace(/-([a-z])/g, g => g[1].toUpperCase())
    }
  }
}