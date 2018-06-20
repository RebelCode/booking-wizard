import VModelProxy from './VModelProxy'

/**
 * Creates mixins definitions.
 *
 * @since [*next-version*]
 *
 * @return {object} List of mixins definitions.
 */
export default function () {
  return {
    /**
     * Mixin for proxying component's model value.
     *
     * @since [*next-version*]
     *
     * @return {object}
     */
    VModelProxy: function () {
      return VModelProxy()
    }
  }
}
