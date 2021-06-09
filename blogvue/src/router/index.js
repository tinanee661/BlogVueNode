import Admin from '@/components/admin/Admin';
import AddPost from '@/components/admin/posts/AddPost';
import EditPost from '@/components/admin/posts/EditPost';
import TestimonialsAdmin from '@/components/admin/TestimonialsAdmin';
import Messages from '@/components/admin/Messages';
import User from '@/components/admin/User';
import RemovePost from '@/components/admin/posts/RemovePost';
import About from '@/components/guest/menu/About';
import Contact from '@/components/guest/menu/Contact';
import Reviews from '@/components/guest/menu/Reviews';
import Home from '@/components/guest/menu/Home';
import HomeU from '@/components/user/umenu/Home';
import Profil from '@/components/user/umenu/Profil';
import Products from '@/components/user/umenu/Products';
import Skincare from '@/components/user/umenu/Skincare';
import Makeup from '@/components/user/umenu/Makeup';
import Testimonials from '@/components/user/umenu/Testimonials';
import Contactu from '@/components/user/umenu/Contactu';
import Settings from '@/components/admin/Settings';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import VueRouter from 'vue-router';
import firebase from '@/Firebase.js';
import router from './index';

//importojme gjithe ato komponenta qe do i regjistrojme si routes

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/admin', name: 'admin', component: Admin },
        { path: '/admin/settings/', name: 'settings', component: Settings },
        { path: '/admin/posts/addpost', name: 'addpost', component: AddPost },
        { path: '/admin/posts/edit/:id', name: 'editpost', component: EditPost },
        { path: '/admin/testimonials/', name: 'testimonialsadmin', component: TestimonialsAdmin },
        { path: '/admin/messages/', name: 'messages', component: Messages },
        { path: '/admin/user/', name: 'user', component: User },
        { path: '/admin/posts/removepost', name: 'removepost', component: RemovePost },
        { path: '/guest/menu/about', name: 'about', component: About },
        { path: '/guest/menu/contact', name: 'contact', component: Contact },
        { path: '/guest/menu/reviews', name: 'reviews', component: Reviews },
        { path: '/guest/menu/home', name: 'home', component: Home },
        { path: '/user/umenu/home', name: 'homeu', component: HomeU },
        { path: '/user/umenu/profil', name: 'profil', component: Profil },
        { path: '/user/umenu/products', name: 'products', component: Products },
        { path: '/user/umenu/skincare', name: 'skincare', component: Skincare },
        { path: '/user/umenu/makeup', name: 'makeup', component: Makeup },
        { path: '/user/umenu/testimonials', name: 'testimonials', component: Testimonials },
        { path: '/user/umenu/contactu', name: 'contactu', component: Contactu },
        { path: '/auth/login', name: 'login', component: Login },
        { path: '/auth/register', name: 'register', component: Register },

    ]



})

router.beforeEach(async(to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !await firebase.getCurrentUser()) {
        next('login');
    } else {
        next();
    }
});