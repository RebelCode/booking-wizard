export default function (VModelProxy, TranslateCapable, MapBookingFieldsCapable) {
  return {
    template: '#eddbk-session-step-template',

    mixins: [ VModelProxy, TranslateCapable, MapBookingFieldsCapable ],

    inject: {
      /**
       * @since [*next-version*]
       *
       * @property {object} `service-session-selector` Service session selector component's definition.
       */
      'service-session-selector': 'service-session-selector'
    },

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
       * @property {string|null} timezone Name of timezone in which sessions will be displayed.
       */
      timezone: {
        default: null
      },

      /**
       * @since [*next-version*]
       *
       * @property {BookingSession} value Selected booking session, model for current component.
       */
      value: {}
    },

    components: {
      'service-session-selector': 'service-session-selector'
    }
  }
}