<template>

    <form>
        <input
            v-bind:value="title"
            @input="inputTitle"
            type="text"
            placeholder="Описание"
        />

        <input v-bind:value="body" type="text" placeholder="Назване"/>
        <button @click="addPost">Создать</button>
    </form>

    <div class="post" v-for="post in posts">
        <div><strong>Название:</strong> {{post.title}}:</div>
        <div><strong>Описание:</strong> {{post.body}}:</div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                posts: [
                    {id: 1, title: 'Пост 1', body: 'Описание поста 1'},
                    {id: 2, title: 'Пост 2', body: 'Описание поста 2'},
                    {id: 3, title: 'Пост 3', body: 'Описание поста 3'},
                ],
                title: '',
                body: '',
            }
        },
        methods: {
            addPost() {

            },
            inputTitle(event) {
                console.log(event.target.value);
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .post, form {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }

</style>
