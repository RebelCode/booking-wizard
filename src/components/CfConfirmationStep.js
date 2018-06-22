export default function (VModelProxy, TranslateCapable, CreateDatetimeCapable, dateFormats) {
  return {
    template: '#eddbk-confirmation-step-template',

    mixins: [ VModelProxy, TranslateCapable, CreateDatetimeCapable ],

    inject: {
      /**
       * @since [*next-version*]
       *
       * @property {Function} nonPluralHumanizeDuration Function for humanizing durations.
       */
      nonPluralHumanizeDuration: 'nonPluralHumanizeDuration'
    },

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
       * @property {string|null} timezone Name of timezone in which sessions will be displayed.
       */
      timezone: {
        default: null
      },

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
        if (!this._selectedSessionDuration) {
          return
        }
        return {
          service: this.service.name,
          price: this._selectedSessionDuration.price.formatted,
          start: this.createLocalDatetime(this.session.start).format(dateFormats.appointmentStart),
          duration: this.nonPluralHumanizeDuration(this.session.duration * 1000)
        }
      },

      /**
       * @since [*next-version*]
       *
       * @property {SessionLength} _selectedSessionDuration Selected session length information.
       */
      _selectedSessionDuration () {
        if (!this.session) {
          return
        }
        return this.service.sessionLengths.find(sessionLength => sessionLength.sessionLength === this.session.duration)
      }
    }
  }
}