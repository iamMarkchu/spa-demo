<template>
    <section class="section register">
        <div class="container has-text-centered">
            <div class="columns">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">注册</h3>
                    <p class="subtitle has-text-grey">填下以下信息，完成注册.</p>
                    <div class="box">
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input :class="{input: true, 'is-large': true, 'is-danger': errors.has('email')}" type="email" placeholder="您的邮箱" autofocus="" name="email" v-model="email" v-validate="'required|email'">
                                </div>
                                <p class="help is-danger has-text-left" v-show="errors.has('email')">{{ errors.first('email')}}</p>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input :class="{input: true, 'is-large': true, 'is-danger': errors.has('name')}" type="text" placeholder="您的姓名" autofocus="" name="name" v-model="name" v-validate="'required'">
                                </div>
                                <p class="help is-danger has-text-left" v-show="errors.has('name')">{{ errors.first('name')}}</p>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="您的密码" v-model="password">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="重复您的密码" v-model="password_confirmation">
                                </div>
                            </div>
                            <button class="button is-block is-primary is-large is-fullwidth" @click.prevent="doRegister" >注册</button>
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
    import { register } from "../../apis/users"

    export default {
        name: "Register",
        data() {
            return {
                email: '',
                name: '',
                password: '',
                password_confirmation: '',
            }
        },
        methods: {
            doRegister() {
                let postData = {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }
                register(postData).then(() => {
                    this.$message.info('注册成功!')
                    this.$router.push({name:'login'})
                }).catch(() => {
                    this.$message.error('注册失败，请重试！')
                })
            }
        }
    }
</script>

<style scoped>

</style>