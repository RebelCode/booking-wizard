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
    }
  }
}