<template>
    <div class="introduction">
        <div class="text-1">
            <div class="text">
                <h1 >Welcome.</h1>
                <p class="paragrafi" > Everything you need to know about
                    the beauty world.<br>Makeup reviews, tutorials, beauty tips & so much more.</p>
                    <p class="paragraf">Log in or sign in to get started</p>
            </div>
        </div>          
        <div class="cta">
            <router-link class="nav-link" to="/auth/register" >
                <button class="cta-select" onclick="">Sign Up</button>
            </router-link>
        
            <router-link class="nav-link" to="/auth/login" >
                <button class="cta-add" onclick="">Log In</button>
            </router-link>
        </div>

        <div class="cover">
            <img src="@/components/guest/img/coverphoto.png" alt="coverphoto.png" width="500px" />
        </div>
    </div>
</template>

<style lang="css" scoped>
    .cta {
        display: flex;
        width: 50%;
    }

    .cta .nav-link{
        margin: 0;
    }
</style>