/**
 * Factory function for mixin that adds ability to use translator
 * inside components.
 *
 * @since [*next-version*]
 *
 * @return {object}
 */
export default function () {
  return {
    inject: {
      /**
       * @since [*next-version*]
       *
       * @property {Function} _ Function for translating strings.
       */
      '_': {
        from: 'translate'
      }
    }
  }
}