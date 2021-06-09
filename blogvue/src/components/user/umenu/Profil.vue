<template>
    <div class="main-container">
        <div class="container mt-5 d-flex justify-content-center">
            <div class="card p-3">
                <div class="d-flex align-items-center">
                    <div class="image"> <img src="https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=854&q=80" class="rounded" width="155"> </div>
                    <div class="ml-3 w-100" v-if="this.$store.getters.user.data">
                        <h4 class="mb-0 mt-0 p-2">Name: {{this.$store.getters.user.data.displayName}}</h4>
                        <h4 class="mb-0 mt-0 p-2">Email: {{this.$store.getters.user.data.email}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.main-container{
    height: 100vh;
}

.card {
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: #fff
}

.stats {
    background: #f2f5f8 !important;
    color: #000 !important
}

.articles {
    font-size: 10px;
    color: #a1aab9
}

.number1 {
    font-weight: 500
}

.followers {
    font-size: 10px;
    color: #a1aab9
}

.number2 {
    font-weight: 500
}

.rating {
    font-size: 10px;
    color: #a1aab9
}

.number3 {
    font-weight: 500
}

.image img{
    width: 230px;
}

</style>