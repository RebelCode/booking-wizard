export default function (TranslateCapable) {
  return {
    template: '#eddbk-wizard-template',

    mixins: [ TranslateCapable ],

    inject: {
      /**
       * @since [*next-version*]
       *
       * @property {{create: Function}} bookingsApi API wrapper for creating bookings.
       */
      bookingsApi: 'bookingsApi',

      /**
       * @since [*next-version*]
       *
       * @property {Moment} moment Moment JS instance.
       */
      moment: 'moment',

      /**
       * @since [*next-version*]
       *
       * @property {VueComponent} `form-wizard` Form wizard component.
       */
      'form-wizard': 'form-wizard',

      /**
       * @since [*next-version*]
       *
       * @property {VueComponent} `tab-content` Wizard's tab content component.
       */
      'tab-content': 'tab-content',

      /**
       * @since [*next-version*]
       *
       * @property {VueComponent} `wizard-button` Wizard's button component.
       */
      'wizard-button': 'wizard-button',

      /**
       * @since [*next-version*]
       *
       * @property {object} `service-step` Service step component's definition.
       */
      'service-step': 'service-step',

      /**
       * @since [*next-version*]
       *
       * @property {object} `session-step` Session step component's definition.
       */
      'session-step': 'session-step',

      /**
       * @since [*next-version*]
       *
       * @property {object} `confirmation-step` Confirmation step component's definition.
       */
      'confirmation-step': 'confirmation-step',
    },

    data () {
      return {
        /**
         * @since [*next-version*]
         *
         * @property {BookableService|null} service Service that should be booked.
         */
        service: null,

        /**
         * @since [*next-version*]
         *
         * @property {BookingSession|null} session Selected booking session.
         */
        session: null,

        /**
         * @since [*next-version*]
         *
         * @property {string|null} notes Additional notes that should be passed with booking.
         */
        notes: null,

        /**
         * @since [*next-version*]
         *
         * @property {boolean} isCreatingBooking Indicates that component is creating booking now.
         */
        isCreatingBooking: false
      }
    },

    props: {
      /**
       * Configuration for wizard.
       *
       * @since [*next-version*]
       *
       * @property {object} config Wizard configuration.
       * @property {BookableService|null} config.service Preselected service for booking.
       * @property {string|null} config.redirectUrl Page on which user should be redirected after successful book.
       */
      config: {
        default () {
          return {
            /**
             * @since [*next-version*]
             *
             * @var {BookableService|null} service Preselected service for booking.
             */
            service: null,

            /**
             * @since [*next-version*]
             *
             * @var {string|null} redirectUrl Page on which user should be redirected after successful book.
             */
            redirectUrl: null
          }
        }
      },
    },

    /**
     * Hook, runs when component is created. It will select service, if service
     * is passed to wizard configuration.
     *
     * @since [*next-version*]
     */
    created () {
      if (this.config.service) {
        this.service = this.config.service
      }
    },

    methods: {
      /**
       * Create booking on server and redirect user to cart, if url is
       * passed to component's config.
       *
       * @since [*next-version*]
       *
       * @return {Promise<any>} Booking creation promise object.
       */
      createBooking () {
        this.isCreatingBooking = true
        return this.bookingsApi.create({
          service: this.service,
          session: this.session,
          notes: this.notes,
          timezone: this.getBrowserTimezone()
        }).then(() => {
          this.isCreatingBooking = false
          if (this.config.redirectUrl) {
            this.redirect(this.config.redirectUrl)
          }
        })
      },

      /**
       * Can user switch from service selection tab.
       *
       * @since [*next-version*]
       *
       * @return {boolean} Can user switch from service tab.
       */
      canSwitchFromServiceTab () {
        return !!this.service
      },

      /**
       * Can user switch from session selection tab.
       *
       * @since [*next-version*]
       *
       * @return {boolean} Can user switch from session selection tab.
       */
      canSwitchFromSessionTab () {
        return !!this.session
      },

      /**
       * Redirect user to some location.
       *
       * @since [*next-version*]
       */
      redirect (url) {
        alert('redirect to', url)
      },

      /**
       * Detect browser timezone.
       *
       * @since [*next-version*]
       *
       * @return {string} Timezone of user.
       */
      getBrowserTimezone () {
        return this.moment.tz.guess()
      }
    },

    components: {
      'form-wizard': 'form-wizard',
      'tab-content': 'tab-content',
      'wizard-button': 'wizard-button',
      'service-step': 'service-step',
      'session-step': 'session-step',
      'confirmation-step': 'confirmation-step',
    }
  }
}