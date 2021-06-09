<template>
  <div class="container login">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row" style="width: 100%;">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row" style="width: 100%;">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0" style="width: 100%;">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary px-5 text-right">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
            let user = this.$store.state.user;
            let role = '';
            if (!user.loggedIn) {
                role = 'guest';
            }

            if (['tinaneziri12@gmail.com'].includes(this.form.email)) {
                role = 'admin';
            } else {
                role = 'user';
            }

          if(role == 'admin'){
            this.$router.push({name: 'admin'})
          }else{
            this.$router.push({name: 'homeu'})
          }
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};

</script>

<style lang="css" scoped>
  .login {
    display: flex;
    flex-direction: column;
    min-height: 540px;
    justify-content: center;
  }
</style>