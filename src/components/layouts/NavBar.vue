<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    Mcgoldfish
                </router-link>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        Documentation
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item" v-if="!isAuth">
                        <div class="buttons">
                            <router-link class="button is-primary" to="/register">
                                <strong>Sign up</strong>
                            </router-link>
                            <router-link class="button is-light" to="/login">
                                Log in
                            </router-link>
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable" v-else>
                        <a class="navbar-link">
                            {{ name }}
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" @click.prevent="delAuthUser">
                                退出登录
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapState,mapActions } from 'vuex'
    export default {
        name: 'navBar',
        computed: {
            ...mapState([
                'isAuth', 'name'
            ])
        },
        methods: {
            ...mapActions([
                'delAuthUser'
            ])
        }
    }
</script>

<style>

</style>