<template>
    <div class="card right-block">
        <header class="card-header">
            <div class="card-header-title">菜单栏</div>
        </header>
        <div class="card-content">
            <div class="content">
                <ul class="menu">
                    <article-menu-item v-for="(item,index) in menus" :key="index" :item="item"></article-menu-item>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleMenuItem from './ArticleMenuItem'
    export default {
        name: "ArticleMenu",
        props: {
            menus: {
                type: Array
            }
        },
        components: {
            ArticleMenuItem
        }
    }
</script>

<style scoped>
    .menu {
        margin-top: 0;
        margin-left: 1em;
    }
    .menu>li>a {
        font-weight: bold;
    }
</style>