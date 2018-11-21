<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link to="/" class="navbar-brand">Mcgoldfish</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="{name: 'about'}"></router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">TBD</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">TBD</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li class="nav-item">
                        <a class="nav-link" href="http://mcgoldfish.com/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://mcgoldfish.com/register">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navBar'
    }
</script>

<style>
.navbar-laravel {
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.04);
    box-shadow: 0 2px 4px rgba(0,0,0,.04);
}
</style>