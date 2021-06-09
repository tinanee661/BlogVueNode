<template>
    <div class="main-container">
        <div class="content">
            <form enctype="multipart/form-data">
                <label for="">TITLE: </label> <br>
                <input type="text" id="title" name="title" required v-model="currentPost.title">
                <label for="">Image: </label> <br>
                <input type="file" id="imagepath" name="imagepath" required  accept="image/x-png,image/gif,image/jpeg">
                <label for="">DESCRIPTION: </label> <br>
                <textarea id="text" name="text" cols="30" rows="5" required v-model="currentPost.description"></textarea>
                <label for="">DESIGN: </label> <br>
                <input type="number" id="design" name="design" required v-model="currentPost.design">
                <label for="">Product Link: </label> <br>
                <input type="text" id="product_link" name="product_link" required v-model="currentPost.product_link">

                <input type="button" name="submit" id="submit" value="Update" @click="updatePost()">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentPost: {
                title: '',
                description: '',
                design: '',
                product_link: '',
            }
        }
    },

    mounted() {
        this.axios.get('/posts/'+this.$route.params.id)
            .then(response => {
                this.currentPost = response.data;
            });
    },

    methods: {
        updatePost(){
            this.axios.put('/posts/'+this.$route.params.id, this.currentPost)
            .then(res => {
                window.location.href = '/admin/';
                console.log(res)
            }).catch(e=>{
                console.log(e)

                console.log('FAILURE!!')
            });
        }
    },
}
</script>

<style lang="css">

</style>