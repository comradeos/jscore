const app = Vue.createApp({
    
    data() {
        return {
            url: "https://google.com",

            companies: [
                { url: "https://google.com", logo: "assets/logos/google.png"},
                { url: "https://apple.com", logo: "assets/logos/apple.png"},
                { url: "https://microsoft.com", logo: "assets/logos/microsoft.png"},
                { url: "https://linux.org", logo: "assets/logos/linux.png"},
            ],
        }
    },

    methods: {
    }

});

app.mount("#app")