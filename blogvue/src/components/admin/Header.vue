<template>
        <nav class="adminpanel navbar navbar-expand-lg" :style="'background-color: '+this.getCookie(this.cookieName)">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin" >
                            <a>Home</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin/posts/addpost" >
                            <a>Add Post</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin/user" >
                            <a>Users</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin/testimonials" >
                            <a>Testimonials</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin/messages" >
                            <a>Messages</a>
                            </router-link>
                        </li>
                    </ul>

                     <li class="nav-item dropdown"  style="list-style-type: none;" v-if="this.$store.getters.user.loggedIn">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ this.$store.getters.user.data.displayName}}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <router-link class="nav-link" to="/admin/settings/" >
                                    <span>Settings</span>
                                </router-link>
                            </li>
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
    .dropdown-toggle{
        
    }
    .nav-link {
        color: black;
        font-size: 20px;
        margin-right: 0 !important;
        padding: 0px 25px !important;
    }

    .nav-link a::after {
        content: '';
        width: 0px;
        height: 1px;
        display: block;
        background: black;
        transition: 300ms;
    }

    .nav-link a:hover::after {
        width: 100%;
    }
</style>