
 Vue.createApp({

    data() {
      return {
        firstName: `Jacob`,
        message: 'Hello Vue!'
      }
    },
    methods: {
        getUser() {
            this.firstName = `Zach`
            console.log(`methods is working`);
        }
    },
  }).mount('#app')


//   app.mount(`#app`);