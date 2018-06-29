import { Bookings } from './Bookings'
import { Services } from './Services/index'
import { Core } from './Core'

export default function (dependencies) {
  return {
    ...Core.makeServices(dependencies),
    ...Bookings.makeServices(dependencies),
    ...Services.makeServices(dependencies),
  }
}