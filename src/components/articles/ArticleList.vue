<template>
    <div class="article-list">
        <div class="card article-card" v-for="article in articles" :key="article.id">
            <div class="card-content">
                <p class="title">{{ article.title }}</p>
                <div class="tags has-addons level-item">
                    <span class="tag is-rounded is-info">@Chukui</span>
                    <span class="tag is-rounded">May 10, 2018</span>
                </div>
                <div class="content">
                    <img class="image" style="margin-bottom: 10px;" src="http://note.youdao.com/iyoudao/wp-content/uploads/2017/09/%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E5%AE%9A_%E5%89%AF%E6%9C%AC.jpg" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate dicta dolorem facere hic id officiis perspiciatis ullam veniam!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate dicta dolorem facere hic id officiis perspiciatis ullam veniam!</p>
                </div>
            </div>
            <footer class="card-footer">
                <div class="card-footer-item">
                    <div class="tags">
                        <span class="tag">标签:</span>
                        <span class="tag is-primary">One</span>
                        <span class="tag is-primary">Two</span>
                        <span class="tag is-primary">Three</span>
                    </div>
                </div>
                <router-link class="card-footer-item" :to="{name:'article', params: {url: article.id}}">阅读全文</router-link>
            </footer>
        </div>
    </div>
</template>

<script>
    import { getList } from '@/apis/articles'
    export default {
        name: "ArticleList",
        data(){
          return {
              articles: []
          }
        },
        created() {
            getList().then(response => {
                this.articles = response.data.data
            })
        }
    }
</script>

<style scoped>
    .article-card {
        margin-bottom: 20px;
    }
</style>