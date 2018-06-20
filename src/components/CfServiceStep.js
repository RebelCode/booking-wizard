export default function (VModelProxy) {
  return {
    template: '#eddbk-service-step-template',

    mixins: [ VModelProxy ],

    inject: {
      /**
       * @since [*next-version*]
       *
       * @property {{fetch: Function}} servicesApi API wrapper for fetching services list.
       */
      servicesApi: 'servicesApi'
    },

    data () {
      return {
        /**
         * @since [*next-version*]
         *
         * @property {BookableService[]} services List of loaded services.
         */
        services: [],

        /**
         * @since [*next-version*]
         *
         * @property {boolean} isLoading Indicates that services are loading now.
         */
        isLoading: false
      }
    },

    props: {
      /**
       * @since [*next-version*]
       *
       * @property {BookableService} value Selected service, model for current component.
       */
      value: {}
    },

    /**
     * Components lifecycle hook, load sessions when component is mounted
     * and service is not preselected.
     *
     * @since [*next-version*]
     */
    mounted () {
      if (!this.value) {
        this.$nextTick(this.loadServices)
      }
    },

    methods: {
      /**
       * Load services list.
       *
       * @since [*next-version*]
       *
       * @return {Promise<any>|null} Services loading promise.
       */
      loadServices () {
        this.isLoading = true
        return this.servicesApi.fetch().then(services => {
          this.services = services
          this.isLoading = false
        })
      }
    }
  }
}