import VModelProxy from './VModelProxy'
import TranslateCapable from './TranslateCapable'

/**
 * Creates mixins definitions.
 *
 * @since [*next-version*]
 *
 * @param {object} dependencies List of dependencies.
 *
 * @return {object} List of mixins definitions.
 */
export default function (dependencies) {
  return {
    /**
     * Mixin for proxying component's model value.
     *
     * @since [*next-version*]
     *
     * @return {object}
     */
    VModelProxy () {
      return VModelProxy()
    },

    /**
     * Mixin that adds method for translating strings.
     *
     * @since [*next-version*]
     *
     * @return {object}
     */
    TranslateCapable () {
      return TranslateCapable()
    }
  }
}
