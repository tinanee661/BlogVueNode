<template>
<div class="p-10 bg-surface-secondary mt-5">
    <div class="container">
        <div class="card">
            <div class="table-responsive" >
                <table class="table table-hover table-nowrap">
                <thead class="thead-light">
                    <tr>
                   
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Description</th>
                     <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody class="" v-for="(contacts, index) in contacts" :key="index">
                
                    <tr>
                    <td data-label="Name">
                        {{contacts.name}}
                    </td>
                    <td data-label="Email">
                        <span> {{contacts.email}}</span>
                    </td>
                    <td data-label="Description">
                        <span> {{contacts.description}}</span>
                    </td>
                    <td>
                      
                      <button type="button" class="btn btn-danger" @click="deleteTest(contacts._id)">Delete</button>
                      </td>
                </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
    data(){
        return {
            contacts: [],
        }
    },

    methods: {
        fetchPosts(){
            this.axios.get('/Contacts/')
                .then(response => {
                    this.contacts = response.data;
                });
        },
        deleteTest(id){
            if (confirm('Are you sure you want to delete this Testimonials?')) {
                this.axios.delete('/Contacts/'+id)
                .then(response => {
                    console.log(response);
                    window.location.reload();
                });
            }
        }
    },

    mounted() {
        this.fetchPosts();
    },
}
</script>