<template>
    <section class="section register">
        <div class="container has-text-centered">
            <div class="columns">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">登录</h3>
                    <div class="box">
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="您的邮箱" autofocus="" v-model="email">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="您的密码" v-model="password">
                                </div>
                            </div>
                            <button class="button is-block is-primary is-large is-fullwidth" @click.prevent="doRegister" >确定</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            doRegister() {
                let postData = {
                    email: this.email,
                    password: this.password,
                }
                this.$store.dispatch('loginRequest', postData).then(() => {
                    this.$router.push('/')
                })
            }
        }
    }
</script>

<style scoped>

</style>