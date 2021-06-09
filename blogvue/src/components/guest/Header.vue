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
                    <router-link class="nav-link" to="/guest/menu/home" >
                    <a>Home</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/guest/menu/reviews" >
                    <a>Reviews</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/guest/menu/contact" >
                    <a>Contact</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/guest/menu/about" >
                    <a>About</a>
                    </router-link>
                </li>
                
                </ul>
                </div>
            </div>
            <h4 class="blog">MakeupBlog</h4>
        </nav>
         
        <!-- <div class="introduction">
            <div class="text-1">
                <h1 ><b>Welcome.</b></h1>
                <div class="text">
                    <p > Everything you need to know about
                        the beauty world & trends.<br> Makeup reviews, tutorials, beauty tips & so much more.</p>
                        <strong>Log in or sign in to get started</strong>
                </div>
            </div>          
                        
            <div class="cta">
                <button class="cta-select" onclick="">Sign Up</button>
                <button class="cta-add" onclick="">Log In</button>
            </div>
            <div class="cover">
                <img src="components/src/img/coverphoto.png" alt="coverphoto.png" />
            </div>
        </div>
        <footer class="footer-1">
            <div class="footer-content">
                <div class="subscribe">
                    <form action="" method="POST" enctype="">
                    <p>Subscribe to our newsletter</p>
                        <input name="email" type="text" id="email" placeholder="  Please enter your email" required> <br>
                        <input id="submit" type="submit" name="submit" value="Submit" >
                    </form>
                </div>
                <div class="vi"></div>
                <div class="quick-links">
                    <ul class="list1">
                        <li><a href="index" target="" class="" title="">Home</a></li> <br>
                        <li><a href="reviews.vue" target="" class="" title="">Reviews</a></li><br>
                        <li><a href="contact" target="" class="" title="Contact Us">Contact</a></li><br>
                        <li><a href="about" target="" class="" title="About Us">About</a></li> <br>
                    </ul>
                </div>
                <div class="vi"></div>
                <div class="social">
                    <ul>
                        <li><a href="https://www.instagram.com"><img src="img/instagram.png" alt="" width="40px" height="40px"></a></li>
                        <li><a href="https://www.facebook.com"><img src="img/facebook.png" alt="" width="40px" height="40px"></a></li>
                        <li><a href="https://www.twitter.com"><img src=" img/twitter.png" alt="" width="40px" height="40px"></a></li>
                        <li><a href="https://www.youtube.com"><img src="img/youtube.png" alt="" width="40px" height="40px"></a></li><br>
                    

                    </ul>
                </div>
            </div>
        </footer> -->
    
    </div>
</template>
