<template>
    <div class="article-edit container">
        <article-form :is-edit="true"></article-form>
    </div>
</template>

<script>
    import ArticleForm from './ArticleForm'
    export default {
        name: "Edit",
        components: {
            ArticleForm
        }
    }
</script>

<style scoped>
    .article-edit {
        margin-top: 20px;
    }
</style>