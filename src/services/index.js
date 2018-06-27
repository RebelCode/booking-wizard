import api from './api'
import components from './components'
import store from './store'
import libs from './libs'
import mixins from './mixins'
import utils from './utils'

export default function (dependencies) {
  return {
    ...api(dependencies),
    ...components(dependencies),
    ...store(dependencies),
    ...libs(dependencies),
    ...mixins(dependencies),
    ...utils(dependencies)
  }
}