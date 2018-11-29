<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-8">
                    <div class="notification is-primary">
                        {{ homeNotice }}
                    </div>
                    <article-list></article-list>
                </div>
                <div class="column is-4">
                    <div class="card right-block">
                        <header class="card-header">
                            <div class="card-header-title">公告栏</div>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <p>个人github: <a href="https://github.com/iamMarkchu/">https://github.com/iamMarkchu/</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- tag components -->
                    <tag-list></tag-list>
                    <!-- category components -->
                    <category-list></category-list>
                    <!-- ads components -->
                    <ads></ads>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex'
    import ArticleList from './../components/articles/ArticleList'
    import TagList from './../components/tags/TagList'
    import CategoryList from '../components/categories/CategoryList'
    import Ads from './../components/commons/Ads'

    export default {
        name: 'home',
        computed: {
            ...mapState([
                'homeNotice'
            ])
        },
        components: {
            ArticleList,
            TagList,
            CategoryList,
            Ads
        }
    }
</script>
