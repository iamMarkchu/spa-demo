<template>
    <div class="article-add container">
        <article-form :is-edit="false"></article-form>
    </div>
</template>

<script>
    import ArticleForm from './ArticleForm'
    export default {
        name: "ArticleAdd",
        components: {
            ArticleForm
        }
    }
</script>

<style scoped>
    .article-add {
        margin-top: 20px;
    }
</style>