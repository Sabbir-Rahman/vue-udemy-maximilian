const app = Vue.createApp({
  data() {
    return {
      text: '',
      tempText: '',
      confirmedText: '',
    };
  },
  methods: {
    showAlert() {
      alert('Alert');
    },
    addText(event) {
      this.text = event.target.value;
    },
    addConfirmText(event) {
      this.tempText = event.target.value;
    },
    enterText() {
      this.confirmedText = this.tempText;
    },
  },
});

app.mount('#assignment');
