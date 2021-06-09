<template>
    <div>
        <nav class="adminpanel navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="main-navigation">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" >
                    <router-link class="nav-link" to="/user/umenu/home" >
                    <a>Home</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/user/umenu/products" >
                    <a>Products</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/user/umenu/skincare" >
                    <a>Skincare</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/user/umenu/makeup" >
                    <a>Makeup</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/user/umenu/testimonials" >
                    <a>Testimonials</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/user/umenu/contactu" >
                    <a>Contact</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/user/umenu/profil" >
                    <a>Profile</a>
                    </router-link>
                </li>
                
                </ul>

                <li class="nav-item dropdown"  style="list-style-type: none;" v-if="this.$store.getters.user.loggedIn">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ this.$store.getters.user.data.displayName}}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="nav-link cursor" @click="logout()">
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
        </nav>
    
    </div>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$store.dispatch('logout');
            this.$router.push({name: 'home'})
        }
    }
}
</script>

<style lang="css" scoped>
    li.nav-item a {
        margin: 0 28px;
    }
</style>