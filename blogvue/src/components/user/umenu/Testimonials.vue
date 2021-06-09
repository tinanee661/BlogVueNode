<template>
  <div class="umain-container">
      <div class="form">
          <form id="formt" >
          <h1>Send your own testimony!</h1>
            <textarea name="testimony" id="testimony" v-model="name" cols="30" rows="10" placeholder="Sent yout testiomony..."></textarea>
            <input type="button" class="float-right mt-3" name="submit" id="submit" value="Send" @click="addtestimonials()">

          </form>
      </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            name: '',
        }
    },
    methods: {
        addtestimonials(){
            
            this.axios.post('/testimonials', {
              name: this.name
            }, {
               
            }).then(res => {
                this.$swal({
                    icon: 'success',
                    title: 'Testimonial has been created!',
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

                this.$router.push({name: 'testimonials'})
                console.log(res)
            }).catch(e=>{
                console.log(e)

                console.log('FAILURE!!')
            });
        }
    },
}
</script>