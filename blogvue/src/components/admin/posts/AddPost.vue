<template>
    <div class="main-container">
        <div class="content">
            <form enctype="multipart/form-data">
                <label for="">TITLE: </label> <br>
                <input type="text" id="title" name="title" required v-model="title">
                <label for="">Image: </label> <br>
                <input type="file" id="imagepath" name="imagepath" required @change="selectedFiles" accept="image/x-png,image/gif,image/jpeg">
                <label for="">DESCRIPTION: </label> <br>
                <textarea  id="text" name="text" cols="30" rows="5" required v-model="description"></textarea>
                <label for="">DESIGN: </label> <br>
                <input type="number" id="design" name="design" required v-model="design">
                <label for="">Product Link: </label> <br>
                <input type="text" id="product_link" name="product_link" required v-model="product_link">

                <input type="button" name="submit" id="submit" value="Add Post" @click="addPost()">
            </form>
        </div>
    </div>
</template>
<style lang="css">

</style>

<script>
export default {
    data(){
        return {
            title: '',
            image: null,
            description: '',
            design: '',
            product_link: '',
        }
    },
    methods: {
        selectedFiles(event){
            if(! event.target.files.length) return
            this.image = event.target.files[0]
        },

        addPost(){
            let formData = new FormData()

            formData.append('title', this.title);
            formData.append('image', this.image);
            formData.append('description', this.description);
            formData.append('design', this.design);
            formData.append('product_link', this.product_link);

            this.axios.post('/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                this.$swal({
                    icon: 'success',
                    title: 'Post has been created!',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', this.$swal.stopTimer)
                        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                    }
                });

                this.$router.push({name: 'admin'})
                console.log(res)
            }).catch(e=>{
                console.log(e)

                console.log('FAILURE!!')
            });
        }
    },
}
</script>