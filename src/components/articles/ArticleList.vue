<template>
    <div class="article-list">
        <div class="card article-card" :key="article.id" v-for="article in articles">
            <div class="card-header">{{ article.title }}</div>
            <div class="card-body">
                <p class="card-text" v-html="article.content"></p>
                <a href="#" class="card-link">阅读全文</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ArticleList",
        data(){
          return {
              articles: []
          }
        },
        created() {
            axios.get('http://api.spa.test/articles').then(response => {
                this.articles = response.data[0].data
                console.log(response)
            })
        }
    }
</script>

<style scoped>
    .article-card {
        margin-bottom: 20px;
    }
</style>