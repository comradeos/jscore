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
        },
    },

    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.favorite == true);
        },
    },

});

app.mount("#app")

// https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=6