import makeStore from './index'

export default function () {
  return {
    /**
     * Vuex store of application.
     *
     * @since [*next-version*]
     *
     * @param {Container} container DI Container.
     *
     * @return {Vuex.Store}
     */
    store (container) {
      const store = makeStore(container.lodash.has, container.lodash.set)
      return new container.vuex.Store(store)
    }
  }
}