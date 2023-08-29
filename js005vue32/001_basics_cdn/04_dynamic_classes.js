const app = Vue.createApp({
    
    data() {
        return {
            books: [
                { title: "book1", favorite: true },
                { title: "book2", favorite: false },
                { title: "book3", favorite: true },
            ],
        }
    },

    methods: {
        toggleFav(book) {
            book.favorite = !book.favorite;
        }
    }

});

app.mount("#app")