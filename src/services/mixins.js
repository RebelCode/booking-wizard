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
     * Mixin for providing datetime creation functions in components.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {object}
     */
    CreateDatetimeCapable (container) {
      return dependencies.bookingWizardComponents.MfCreateDatetimeCapable(container.moment)
    }
  }
}
