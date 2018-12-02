<template>
    <li>
        <router-link :to="'#' + item.text">{{ item.text }}</router-link>
        <ul v-if="item.hasOwnProperty('child')">
            <article-menu-item v-for="(item2,index) in item.child" :key="index" :item="item2"></article-menu-item>
        </ul>
    </li>
</template>

<script>
    export default {
        name: "ArticleMenuItem",
        props: {
            item: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    a {
        color: #000;
    }
    a:hover {
        color: #00d1b2;
    }
</style>