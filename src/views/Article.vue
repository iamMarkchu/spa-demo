<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-8">
                    <div class="card article-card">
                        <loading v-show="loading"></loading>
                        <div class="card-content" v-show="!loading">
                            <h1 class="title has-text-centered">{{ article.title }}</h1>
                            <div class="tags has-addons level-item">
                                <span class="tag is-rounded is-info">@{{ article.user.name }}</span>
                                <span class="tag is-rounded">{{ article.updated_at | formatDate }}</span>
                            </div>
                            <hr>
                            <div class="content" v-html="showHtml"></div>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <article-menu :menus="article.menus"></article-menu>
                    <tag-list :article-tags="article.tags" :only-article="true"></tag-list>
                    <ads></ads>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import ArticleMenu from './articles/ArticleMenu'
    import TagList from './../components/tags/TagList'
    import Ads from './../components/commons/Ads'
    import { publicShow } from "../apis/articles"
    import showdown from "showdown"
    import moment from "moment"
    import Loading from './../components/commons/Loading'
    export default {
        name: "Article",
        data() {
            return {
                article: {
                    title: '',
                    content: '',
                    updated_at: '',
                    user: {
                        name: '',
                    },
                    menus: [],
                },
                converter: null,
                loading: false
            }
        },
        created() {
            showdown.setFlavor('github')
            this.converter = new showdown.Converter()
            this.loading = true
            publicShow(this.$route.params.url).then(response => {
                this.article = response.data.data
                this.loading = false
            })
        },
        computed: {
            showHtml() {
                return this.converter.makeHtml(this.article.content)
            },
            menus() {
                let a = this.article.content.split("\n").map(function (item) {
                    if (item[0] === '#') {
                        return item
                    }
                }).filter(function (item) {
                    return item != null
                }).map(function (item) {
                    // if (item.slice(0, 6)+' ' === '###### ') {
                    //     return {h: 6, text: item.slice(6)}
                    // } else if (item.slice(0, 5)+' ' === '##### ') {
                    //     return {h: 5, text: item.slice(5)}
                    // }else
                    if (item.slice(0, 4)+' ' === '#### ') {
                        return {h: 4, text: item.slice(4).trim(), child: []}
                    }else if (item.slice(0, 3)+' ' === '### ') {
                        return {h: 3, text: item.slice(3).trim(), child: []}
                    }else if (item.slice(0, 2)+' ' === '## ') {
                        return {h: 2, text: item.slice(2).trim(), child: []}
                    }else if (item.slice(0, 1)+' ' === '# ') {
                        return {h: 1, text: item.slice(1).trim(), child: []}
                    }
                })
                let arr = []
                let i = -1
                let j = -1
                let k = -1
                let l = -1
                a.map(function (item) {
                    if (item.h === 1) {
                        arr[++i] = item
                        j=-1
                        k=-1
                        l=-1
                    } else if (item.h === 2) {
                        arr[i].child[++j] = item
                        k = -1
                        l = -1
                    } else if (item.h === 3) {
                        arr[i].child[j].child[++k] = item
                        l = -1
                    } else if (item.h === 4) {
                        arr[i].child[j].child[k].child[++l] = item
                    }
                })
                console.log(arr)
                return arr
            }
        },
        filters: {
            formatDate(dateString) {
                return moment(dateString).format('LL')
            }
        },
        components: {
            TagList,Ads,ArticleMenu,Loading
        }
    }
</script>

<style scoped>

</style>