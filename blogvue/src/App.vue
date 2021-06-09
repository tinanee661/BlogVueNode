<template>
    <div>
        <app-Header-Admin v-if="this.$store.getters.getRole == 'admin'"></app-Header-Admin>
        <app-Header-U v-else-if="this.$store.getters.getRole == 'user'"></app-Header-U>
        <app-Header v-else></app-Header>
       

                <!--<h1 v-highlight="'red'">Routing</h1>
                <p >Hello World</p>
                <h3>Local Directive</h3>
                <p>{{text | toUpperCase | to-lowercase}}</p> -->
        <div style="min-height: 541px;">
            <router-view></router-view>
        </div>
        
        <app-Footer-Admin v-if="this.$store.getters.getRole == 'admin'"></app-Footer-Admin>
        <app-Footer-U v-else-if="this.$store.getters.getRole == 'user'"></app-Footer-U>
        <app-Footer v-else></app-Footer>
    </div>
</template>

<script>
/* eslint-disable */
    import HeaderAdmin from './components/admin/Header.vue';
    import FooterAdmin from './components/admin/Footer.vue';
    import Header from './components/guest/Header.vue';
    import Footer from './components/guest/Footer.vue';
    import HeaderU from './components/user/HeaderU.vue';
    import FooterU from './components/user/FooterU.vue';
    import store from 'vuex';

    export default {
        data(){
            return{
                text:'Hello World',
            }
        },
     
        components:{
            appHeader:Header,
            appFooter:Footer,
            appHeaderAdmin:HeaderAdmin,
            appFooterAdmin:FooterAdmin,
            appHeaderU:HeaderU,
            appFooterU:FooterU,
        },
        directives:{
            'local-hightlight':{
                bind(el, binding, vnode){
                el.style.color='blue';
            }
        }
    }
    }
</script>

<style>
    @import '../src/assets/style.css';
</style>
