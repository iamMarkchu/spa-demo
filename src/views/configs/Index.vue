<template>
    <div class="config-index container">
        <div class="box">
            <h1 class="title has-text-centered">配置中心</h1>
            <h4 class="subtitle has-text-centered">配置你想配置的一切</h4>
            <form @submit.prevent="handleStore">
                <div class="field">
                    <label for="" class="label">配置名称</label>
                    <div class="control">
                        <input type="text" class="input" v-model="configForm.name">
                    </div>
                </div>
                <div class="field">
                    <label for="" class="label">配置内容</label>
                    <div class="control">
                        <input type="text" class="input" v-model="configForm.value">
                    </div>
                </div>
                <div class="field">
                    <label for="" class="label">配置描述</label>
                    <div class="control">
                        <input type="text" class="input" v-model="configForm.short_desc">
                    </div>
                </div>
                <button :class="{button: true, 'is-info': true, 'is-loading': configForm.hasOwnProperty('doSaving')}">添加配置</button>
            </form>
            <hr>
            <div class="field" v-for="config in configs" :key="config.id">
                <label class="label" style="margin-bottom: 15px;">{{ config.name }}({{ config.short_desc }})</label>
                <div class="control has-icons-right">
                    <input class="input" type="text" placeholder="HOME_BANNER" v-model="config.value">
                    <span class="icon is-small is-right has-text-success" v-if="config.hasOwnProperty('isSaved')">
                      <i class="fas fa-check"></i>
                    </span>
                </div>
                <div class="buttons has-addons is-right" style="margin-top: 5px;">
                    <span :class="{button: true, 'is-small': true, 'is-info': true, 'is-loading': config.hasOwnProperty('doSaving')}" @click="handleSave(config)">保存</span>
                    <span :class="{button: true, 'is-small': true, 'is-danger': true, 'is-loading': config.hasOwnProperty('doDeleting')}" @click="handleDelete(config)">删除</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getList,update,store,del } from "../../apis/configs"

    export default {
        name: "ConfigIndex",
        data() {
            return {
                configs: [],
                configForm: {
                    name: '',
                    value: '',
                    short_desc: '',
                }
            }
        },
        created() {
            getList().then(response => {
                console.log(response)
                this.configs = response.data.data.data
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            handleStore() {
                this.$set(this.configForm, 'doSaving', true)
                store(this.configForm).then(response => {
                    console.log(response)
                    this.configs.unshift(response.data.data)
                    this.$store.commit('setNoti', {
                        notiShow: true,
                        notiType: 'success',
                        notiText: '保存配置成功!',
                    })
                }).catch(error => {
                    console.log(error)
                }).finally(() => {
                    this.configForm = {
                        name: '',
                        value: '',
                        short_desc: '',
                    }
                })
            },
            handleSave(config) {
                this.$delete(config, 'isSaved')
                this.$set(config, 'doSaving', true)
                update(config, config.id).then(response => {
                    console.log(response)
                    this.$set(config, 'isSaved', true)
                }).catch(error => {
                    console.log(error)
                }).finally(() => {
                    this.$delete(config, 'doSaving')
                })

            },
            handleDelete(config) {
                this.$set(config, 'doDeleting', true)
                del(config.id).then(response => {
                    console.log(response)
                    this.$store.commit('setNoti', {
                        notiShow: true,
                        notiType: 'success',
                        notiText: '删除配置成功!',
                    })
                    this.configs = this.configs.filter(function (item) {
                        return item.id !== config.id
                    })
                }).catch(error => {
                    console.log(error)
                }).finally(() => {
                    this.$delete(config, 'doDeleting')
                })
            }
        }
    }
</script>

<style scoped>
    .config-index {
        margin-top: 20px;
    }
</style>