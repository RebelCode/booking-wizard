import components from './components'
import libs from './libs'
import mixins from './mixins'

export default function (dependencies) {
  return {
    ...components(dependencies),
    ...libs(dependencies),
    ...mixins(dependencies)
  }
}