const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    confirmedInput(){
      this.confirmedName = this.name
    },
    submitForm(){
      alert('Form is submitted')
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event,lastName) {
      this.name = event.target.value + ' '+ lastName
    }
  },
});

app.mount('#events');
