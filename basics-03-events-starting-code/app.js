const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: ""
    };
  },
  computed: {
    fullname() {
      console.log('Running again')

      if (this.name == ''){
        return ''
      }

      return this.name + ' ' + 'Rahman'
    }
  },
  watch: {
    counter(value){
      if (value > 50) {
        this.counter = 0
      }
    }
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
    },
    reset(){
      this.name = ''
      this.confirmedName = ''
    }
  },
});

app.mount('#events');
