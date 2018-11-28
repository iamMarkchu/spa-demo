<template>
    <div class="card right-block">
        <header class="card-header">
            <div class="card-header-title">类别栏</div>
        </header>
        <div class="card-content">
            <loading v-show="loading"></loading>
            <div class="tags">
                <span class="tag is-info" v-for="category in categories">{{ category.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAll} from "../../apis/categories"
    import Loading from "../../components/commons/Loading"
    export default {
        name: "CategoriesList",
        data(){
            return {
                categories: [],
                loading: false,
            }
        },
        created() {
            this.loading = true
            getAll().then(response => {
                this.categories = response.data.data
                this.loading = false
            }).catch(error => {
                this.loading = false
                console.log(error)
            })

        },
        components: {
            Loading
        }
    }
</script>

<style scoped>

</style>