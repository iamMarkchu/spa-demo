<template>
    <div class="card right-block">
        <header class="card-header">
            <div class="card-header-title">标签栏</div>
        </header>
        <div class="card-content">
            <div class="tags">
                <span class="tag" v-for="tag in tags" :key="tag.id">{{ tag.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "TagList",
        data() {
            return {
                tags:[]
            }
        },
        created() {
            axios.get('http://api.spa.test/tags').then(response => {
                this.tags = response.data
                console.log(response)
            })
        }
    }
</script>

<style scoped>

</style>