<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <article-list></article-list>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </main>
</template>

<script>
import ArticleList from './../components/articles/ArticleList'
export default {
  name: 'home',
  components: {
      ArticleList
  }
}
</script>
