<template>
    <div class="card right-block">
        <header class="card-header">
            <div class="card-header-title">
                标签栏
            </div>
        </header>
        <div class="card-content">
            <loading v-show="loading"></loading>
            <div class="tags">
                <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="{name: 'tag', params: {url: tag.id}}">{{ tag.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { getAll } from "../../apis/tags"
    import Loading from '@/components/commons/Loading'
    export default {
        name: "TagList",
        data() {
            return {
                tags:[],
                loading: false
            }
        },
        props: {
            articleTags: {
                type: Array,
                default: () => {
                    return []
                }
            },
            onlyArticle: {
                type: Boolean,
                default: false
            }
        },
        created() {
            if (!this.onlyArticle) {
                this.loading = true
                getAll().then(response => {
                    this.tags = response.data.data
                    this.loading = false
                }).catch(error => {
                    console.log(error)
                    this.loading = false
                })
            }
        },
        watch: {
            articleTags(val) {
                this.tags = val
            }
        },
        components: {
            Loading
        }
    }
</script>

<style scoped>

</style>