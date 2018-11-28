<template>
    <section class="section register">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey has-text-centered">登录</h3>
                    <div class="box">
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input :class="{input:true, 'is-large': true, 'is-danger': (fields.email && fields.email.invalid && fields.email.dirty), 'is-success': (fields.email && fields.email.valid)}" type="email" placeholder="您的邮箱" autofocus="" v-model="email" name="email" v-validate="'required|email'">
                                </div>
                                <p class="help is-danger" v-show="errors.has('email')">{{ errors.first('email')}}</p>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input :class="{input:true, 'is-large': true, 'is-danger': (fields.password && fields.password.invalid && fields.password.dirty), 'is-success': (fields.password && fields.password.valid)}" type="password" placeholder="您的密码" v-model="password" name="password" v-validate="'required|min:3'">
                                </div>
                                <p class="help is-danger" v-show="errors.has('password')">{{ errors.first('password')}}</p>
                            </div>
                            <button class="button is-block is-primary is-large is-fullwidth" @click.prevent="doLogin" >确定</button>
                        </form>
                    </div>
                    <!--<p class="has-text-grey">-->
                        <!--<a href="../">Sign Up</a> &nbsp;·&nbsp;-->
                        <!--<a href="../">Forgot Password</a> &nbsp;-->
                    <!--</p>-->
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
            doLogin() {
                this.$validator.validate().then(result => {
                    if (!result) {
                        return;
                    }
                    let postData = {
                        email: this.email,
                        password: this.password,
                    }
                    this.$store.dispatch('loginRequest', postData).then(() => {
                        let payload = {
                            notiShow: true,
                            notiType: 'success',
                            notiText: '登录成功！'
                        }
                        this.$store.dispatch('showNotification', payload)
                        this.$router.push('/')
                    }).catch(error => {
                        let payload = {
                            notiShow: true,
                            notiType: 'danger',
                            notiText: '用户名密码不匹配'
                        }
                        this.$store.dispatch('showNotification', payload)
                        console.log(error)
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>