export default function (VModelProxy, TranslateCapable) {
  return {
    template: '#eddbk-confirmation-step-template',

    mixins: [ VModelProxy, TranslateCapable ],

    props: {
      /**
       * @since [*next-version*]
       *
       * @property {BookableService|null} service Service that should be booked.
       */
      service: {},

      /**
       * @since [*next-version*]
       *
       * @property {BookingSession|null} session Selected booking session.
       */
      session: {},

      /**
       * @since [*next-version*]
       *
       * @property {string} value Booking confirmation notes, model for current component.
       */
      value: {},
    },

    computed: {
      /**
       * @since [*next-version*]
       *
       * @property {object} appointment Summary information for appointment.
       */
      appointment () {
        return {
          price: 'PRICE', // @todo
          start: 'START TIME', // @todo
          duration: 'DURATION' // @todo
        }
      }
    }
  }
}