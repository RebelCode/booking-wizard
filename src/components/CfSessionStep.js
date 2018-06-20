export default function (VModelProxy) {
  return {
    mixins: [ VModelProxy ],

    props: {
      /**
       * @since [*next-version*]
       *
       * @property {BookableService|null} service Service that can be booked.
       */
      service: {
        default: null
      },

      /**
       * @since [*next-version*]
       *
       * @property {BookingSession} value Selected booking session, model for current component.
       */
      value: {}
    }
  }
}