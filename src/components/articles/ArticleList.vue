<template>
    <div class="article-list">
        <loading :is-show="loading"></loading>
        <div class="card article-card" v-for="article in articles" :key="article.id">
            <div class="card-content">
                <p class="title has-text-centered">{{ article.title }}</p>
                <div class="tags has-addons level-item">
                    <span class="tag is-rounded is-info">@{{ article.user.name }}</span>
                    <span class="tag is-rounded">{{ article.updated_at | formatDate }}</span>
                </div>
                <div class="content">
                    <img v-show="article.cover != ''" class="image" style="margin-bottom: 10px;" :src="article.cover" alt="">
                    <div v-html="shortDesc(article)"></div>
                </div>
            </div>
            <footer class="card-footer">
                <div class="card-footer-item">
                    <div class="tags">
                        <span class="tag is-success"><i class="fas fa-tags"></i></span>
                        <span class="tag is-primary" v-for="tag in article.tags" :key="tag.id">{{ tag.name }}</span>
                    </div>
                </div>
                <router-link class="card-footer-item" :to="{name:'article', params: {url: article.id}}">阅读全文</router-link>
            </footer>
        </div>
        <nav class="pagination is-small" role="navigation" aria-label="pagination" v-show="lastPage > 1">
            <router-link class="pagination-previous" :disabled="currentPage === 1" :to="{name:'home', query:{page: this.currentPage -1}}">上一页</router-link>
            <router-link class="pagination-next" :disabled="currentPage === lastPage" :to="{name:'home', query:{page: this.currentPage + 1}}">下一页</router-link>
            <ul class="pagination-list">
                <li v-for="i in pages" :key="i"><router-link :class="displayPageClass(i)" :to="{name:'home', query:{page: i}}">{{ i }}</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import { publicGetList } from '@/apis/articles'
    import Loading from '@/components/commons/Loading'
    import showdown from "showdown"
    import moment from "moment"
    export default {
        name: "ArticleList",
        data(){
          return {
              articles: [],
              currentPage: 1,
              lastPage:0,
              totalCount: 0,
              pageSize: 2,
              startPage: 0,
              endPage:0,
              loading: false,
              converter: null,
          }
        },
        created() {
            this.converter = new showdown.Converter()
            this.fetchData()
        },
        watch: {
            '$route' (to) {
                console.log(to)
                this.fetchData()
            }
        },
        methods: {
            shortDesc(article) {
                let desc = article.content.split("\n").slice(0, 6).join("\n")
                console.log(desc)
                return this.converter.makeHtml(desc)
            },
            displayPageClass(i) {
                return {
                    'pagination-link': true,
                    'is-current': i === this.currentPage
                }
            },
            fetchData() {
                this.loading = true
                let params = {status: 1, pageSize: this.pageSize, page: this.$route.query.hasOwnProperty('page')? this.$route.query.page: 1}
                publicGetList(params).then(response => {
                    this.articles = response.data.data.data
                    this.currentPage = response.data.data.current_page
                    this.lastPage = response.data.data.last_page
                    this.totalCount = response.data.data.total
                    this.loading = false
                }).catch(error => {
                    console.log(error)
                    this.loading = false
                })
            }
        },
        computed: {
            pages() {
                let pageCount = Math.ceil(this.totalCount/this.pageSize)
                let start = (this.currentPage - 3) > 1 ? this.currentPage - 3 : 1
                let end = (this.currentPage + 3) > pageCount ? pageCount : this.currentPage + 3
                let pageNum = []
                for (let i=start;i<=end;i++) {
                    pageNum.push(i)
                }
                console.log(pageNum)
                return pageNum
            },
            // showFirst() {
            //     let pageCount = Math.ceil(this.totalCount/this.pageSize)
            //     let start = (this.currentPage + 3) > pageCount ? pageCount: this.currentPage + 3
            //     return start > 5
            // },
            // showLast() {
            //     let pageCount = Math.ceil(this.totalCount/this.pageSize)
            //     let end = (this.currentPage - 3) < 1 ? 1: this.currentPage - 3
            //     return end < pageCount - 5
            //}
        },
        filters: {
            formatDate(dateString) {
                return moment(dateString).format('LL')
            }
        },
        components: {
            Loading
        }
    }
</script>

<style scoped>
    .article-card {
        margin-bottom: 20px;
    }
</style>