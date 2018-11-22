<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <div class="notification is-primary">
            博客正在逐步完善中....
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
                <p>个人github: <a href="https://github.com/iamMarkchu/">https://github.com/iamMarkchu/</a></p>
              </div>
            </div>
          </div>
          <!-- tag components -->
          <tag-list></tag-list>
          <div class="card right-block">
            <header class="card-header">
              <div class="card-header-title">类别栏</div>
            </header>
            <div class="card-content">
              <div class="tags">
                <span class="tag">One</span>
                <span class="tag">Two</span>
                <span class="tag">Three</span>
                <span class="tag">Four</span>
                <span class="tag">Five</span>
                <span class="tag">Six</span>
                <span class="tag">Seven</span>
                <span class="tag">Eight</span>
                <span class="tag">Nine</span>
                <span class="tag">Ten</span>
                <span class="tag">Eleven</span>
                <span class="tag">Twelve</span>
                <span class="tag">Thirteen</span>
                <span class="tag">Fourteen</span>
                <span class="tag">Fifteen</span>
                <span class="tag">Sixteen</span>
                <span class="tag">Seventeen</span>
                <span class="tag">Eighteen</span>
                <span class="tag">Nineteen</span>
                <span class="tag">Twenty</span>
              </div>
            </div>
          </div>
          <div class="card right-block">
            <header class="card-header">
              <div class="card-header-title">广告位</div>
            </header>
            <div class="card-content">
              <div class="content">
                <img src="https://mars-assets.qnssl.com/qiniulog/img-slogan-blue-en.png" alt="" class="image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleList from './../components/articles/ArticleList'
import TagList from './../components/tags/TagList'
export default {
  name: 'home',
  components: {
      ArticleList,
      TagList
  }
}
</script>
