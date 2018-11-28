<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-8">
                    <div class="card article-card">
                        <div class="card-content">
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
                    <tag-list></tag-list>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import TagList from './../components/tags/TagList'
    import { publicShow } from "../apis/articles"
    import showdown from "showdown"
    import moment from "moment"
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
                    }
                },
                converter: null,
            }
        },
        created() {
            this.converter = new showdown.Converter()
            publicShow(this.$route.params.url).then(response => {
                this.article = response.data.data
            })
        },
        computed: {
            showHtml() {
                return this.converter.makeHtml(this.article.content)
            }
        },
        filters: {
            formatDate(dateString) {
                return moment(dateString).format('LL')
            }
        },
        components: {
            TagList
        }
    }
</script>

<style scoped>

</style>