<template>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <img src="/logo2.png" alt="">
                </router-link>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">

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
                    <template v-else>
                        <div class="navbar-item">
                            <div class="buttons">
                                <router-link class="button is-info" to="/article-add">
                                    写文章
                                </router-link>
                            </div>
                        </div>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                {{ name }}
                            </a>
                            <div class="navbar-dropdown">
                                <router-link class="navbar-item" to="/articles">
                                    <i class="fas fa-file-alt"></i> &nbsp; 文章管理
                                </router-link>
                                <router-link class="navbar-item" to="/configs">
                                    <i class="fas fa-cogs"></i> &nbsp; 配置中心
                                </router-link>
                                <router-link class="navbar-item" to="/login">
                                    <i class="fas fa-user"></i> &nbsp; 个人中心
                                </router-link>
                                <a class="navbar-item" @click.prevent="logoutRequest">
                                    <i class="fas fa-power-off"></i> &nbsp; 退出登录
                                </a>
                            </div>
                        </div>
                    </template>
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
                'logoutRequest'
            ])
        }
    }
</script>

<style scoped>

</style>