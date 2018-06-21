export default function (VModelProxy, TranslateCapable) {
  return {
    template: '#eddbk-session-step-template',

    mixins: [ VModelProxy, TranslateCapable ],

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
       * @property {BookingSession} value Selected booking session, model for current component.
       */
      value: {}
    },

    components: {
      'service-session-selector': 'service-session-selector'
    }
  }
}