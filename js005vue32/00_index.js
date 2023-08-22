const app = Vue.createApp({
    // data, functions, templates
    // template: "<h2>I'm a template</h2>"
    data() {
        return {
            title: "The Filnal Empire",
            author: "Brandon Sanderson",
            age: 33,
            showBooks: true,
        }
    },

    methods: {
        changeTitle(value) {
            console.log("clicked");
            this.title = value;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
    }
});

app.mount("#app")