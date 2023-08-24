let data = {
    data() {
        return {
            books: [
                { author:"Auth1", title: "Title1" },
                { author:"Auth2", title: "Title2" },
                { author:"Auth3", title: "Title3" },
            ]
        }
    },

    methods: {
        helloFromMethod() {
            console.log("hello from method");
        },
    }
};

const app = Vue.createApp(data);

app.mount("#app")