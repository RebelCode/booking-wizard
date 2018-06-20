import VModelProxy from './VModelProxy'

/**
 * Creates mixins definitions.
 *
 * @return {object} List of mixins definitions.
 */
export default function () {
  return {
    VModelProxy: function () {
      return VModelProxy()
    }
  }
}
