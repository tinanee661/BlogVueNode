<template>
    <div>
        <div class="main-container">
            <div class="container">
               <div class="title">
                    <h1> Remove Testimonial</h1>   
                </div>
            </div>

            <div class="content" v-for="(testimonials, index) in testimonials" :key="index">
                <section class="quotescontent">
                  
                    <div class="bubble">
                        <blockquote>{{testimonials.name}}</blockquote>
                        <div class="triangle"></div>
                        <cite></cite>
                        <a id="remove" href="" class="btn btn-dark" @click="deleteTest(testimonials._id)">Remove</a>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            testimonials: [],
        }
    },

    methods: {
        fetchTest(){
            this.axios.get('/Testimonials/')
                .then(response => {
                    this.testimonials = response.data;
                });
        },

        deleteTest(id){
            if (confirm('Are you sure you want to delete this Testimonials?')) {
                this.axios.delete('/Testimonials/'+id)
                .then(response => {
                    console.log(response);
                    window.location.reload();
                });
            }
        }
    },

    mounted() {
        this.fetchTest();
    },
}
</script>


<style lang="css" scoped>
.main-container{
    height:100vh;
    background-color: whitesmoke;
}
body {
    margin: 0;
   padding: 0;
   height: 100%;
   font-family: sans-serif;
}

 h1 {
   width: 100%;
   text-align: center;
   margin-top:50px;
   /* color:rgba(182,134,142,0.979); */
   letter-spacing: .3em;
   font-size:3.5vw;
   font-weight: normal;
   text-transform: uppercase;
 }
 .content{
    overflow-y: scroll;
    height: 300px;
    width: auto;
    margin: 30px 100px;
    background-color: #f7dee3;
    box-shadow: 0 0 2px 0;
  
} 
 .quotes {
    height: 600px;
     width: 60%;
     margin-bottom: 30px;
     height: auto;
 }
 
 .bubble blockquote {
    margin: 40px 40px 0px 40px;
    background: #fff;
    padding: 60px;
    border: none;
    border-radius: 8px;
    font-size: 1.25em;
    color:black;
    width: 500px;
    height: auto;

}
.bubble .triangle {
    width: 0;
    height: 0;
    border-left: 0 solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #fff;
    margin: 0 0 0 60px;
    margin-bottom: 20px;
}
.bubble cite {
    padding-left: 20px;
    font-size: 1.45em;
    color: black;
}
.form{
    margin: 90px 0px 0px 0px;
}
#formt{
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#user, #testimony{
    width: 300px;
    padding: 12px;
    background-color: #ffffff;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    border-radius: 1px;
}
#submit{
    background-color: rgba(182, 134, 142, 0.979);
    border-radius: 1px;
    color: black;
    width: 100px;
    padding: 12px 20px;
    cursor: pointer;
    margin-bottom: 70px; 
}
#remove{
    float: right;
    margin-right: 30px;
    font-size: 20px;
    color:black;
    background-color: white;
    padding: 7px;
    border-radius: 10px;
}
@media only screen and (max-width: 1024px){
    body {
        margin: 0;
       padding: 0;
       height: 100%;
        font-family: sans-serif;
       background: #ecd5d9
     }
    
     h1 {
       width: 100%;
       text-align: center;
       margin-top:50px;
       color:rgba(182,134,142,0.979);
       letter-spacing: .3em;
       font-size:3.5vw;
       font-weight: normal;
       text-transform: uppercase;
       
     }
     .content{
        overflow-y: scroll;
        height: 600px;
        width: auto;
        margin: 30px 50px;
        background-color: #f7dee3;
        box-shadow: 0 0 2px 0;
      
    } 
     .quotes {
        height: 600px;
         width: 100%;
         margin: 20px auto;
         height: auto;
     }
     
     .bubble blockquote {
        margin: 65px 25px 0px 25px;
        background: #fff;
        padding: 40px;
        border: none;
        border-radius: 8px;
        font-size: 15px;
        color:black;
        width: auto;
        height: auto;
    
    }
    .bubble .triangle {
        width: 0;
        height: 0;
        border-left: 0 solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #fff;
        margin: 0 0 0 60px;
        margin-bottom: 20px;
    }
    .bubble cite {
        padding-left: 20px;
        font-size: 15px;
        color: black;
    }
    .form{
        margin: 90px 0px 0px 0px;
    }
    #formt{
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    #user, #testimony{
        width: 300px;
        padding: 12px;
        background-color: #ffffff;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
        border-radius: 1px;
    }
    #submit{
        background-color: rgba(182, 134, 142, 0.979);
        border-radius: 1px;
        color: black;
        width: 100px;
        padding: 12px 20px;
        cursor: pointer;
        margin-bottom: 70px; 
    }
    #remove{
        float: right;
        margin-right: 30px;
        font-size: 15px;
        color:black;
        background-color: white;
        padding: 7px;
        border-radius: 10px;
    } 
}
</style>