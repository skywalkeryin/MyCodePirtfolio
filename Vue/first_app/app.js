Vue.createApp({
  data() {
    return {
      firstName: "John",
      age: 20,
      timer: null // Variable to store the timer ID
    };
  },
  methods: {
    increment() {
      this.age++;
    },

    decrement() {
      this.age--;
    },
  },

  watch: {
    age(newValue, oldValue) {
        // Clear previous timer if it exists
        if(this.timer) {
            clearTimeout(this.timer)
        }

        this.timer = setTimeout(() => {
            this.age = 20;
            console.log("update age");
          }, 3000);
    }
  },
}).mount("#app");
