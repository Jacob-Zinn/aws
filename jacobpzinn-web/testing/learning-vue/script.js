// let app = new Vue({
//   // bind it to the #root div in the DOM
//   el: "#root",
//   // provide data for bindings
//   data() {
//     return {
//       message: "Hello World",
//     };
//   },
// });


// app.message = `Wow, that's just crazy`




// let app = new Vue({
//   // bind it to the #root div in the DOM
//   el: "#root",
//   // provide data for bindings
//   data: {
//     names: ['Emma', 'Brandon', 'Lucy', 'Jorge'],
//     newName: ''
//   },
//    // custom methods
//    methods: {
//     // addName will add the value of the newName property to the list of names
//     addName() {
//       if (this.newName === '')
//         return;
//       this.names.push(this.newName);
//       this.newName = "";
//     }
//   }
// });


// let app = new Vue({
//   // bind it to the #root div in the DOM
//   el: "#root",
//   // provide data for bindings
//   data: {
//     title: 'Brought to you by JavaScript',
//     className: 'red',
//     isLoading: true
//   },
//   methods: {
//     toggleLoading() {
//       this.isLoading = !this.isLoading;
//     }
//   }
// });


let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'I really like bread',
  },
  computed: {
    screaming() {
      return this.message.toUpperCase();
    }
  
  }
});

let nextApp = new Vue({
  // bind it to the #root div in the DOM
  el: "#app",
  // provide data for bindings
  data: {
    message: 'I really like bread',
    tasks: [{
        description: "Create some loaves of bread",
        completed: true
      },
      {
        description: "Create some fish",
        completed: true
      },
      {
        description: "Create more loaves of bread",
        completed: false,
      },
      {
        description: "Create more fish",
        completed: false
      },
      {
        description: "Create more loaves of bread",
        completed: false
      },
      {
        description: "Tell Peter to clean up the mess",
        completed: false
      }
    ]
  },
  computed: {
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    }
  }
});