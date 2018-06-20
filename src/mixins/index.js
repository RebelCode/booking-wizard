import VModelProxy from './VModelProxy'

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
    }
  }
}
