const app = Vue.createApp({

    data() {
        return {
            person: {
                id: 1,
                name: "Iaroslav",
            },
            x: 0,
            y: 0,
        }
    },

    methods: {
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        }, 
        handleMouseMove(e) {
            // const rndInt = Math.floor(Math.random() * 100000) + 1
            // console.log(rndInt);
            this.x = e.offsetX
            this.y = e.offsetY
        },
        
    }

});

app.mount("#app");



// https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3
// 10 51 