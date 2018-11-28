<template>
    <el-select v-model="selectCategories" placeholder="请选择"
               filterable
               allow-create
               default-first-option
               clearable
               @change="handleChange">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
    import {getAll} from "../../apis/categories"
    export default {
        name: "CategorySelect",
        props: ['categories'],
        data() {
            return {
                selectCategories:[],
                options:[],
            }
        },
        created() {
            this.selectCategories = this.categories
            getAll().then(response => {
                this.options = response.data.data.map(function (item) {
                    return { value: item.id, label: item.name}
                })
            })
        },
        watch: {
            categories(val) {
                this.selectCategories = val
            }
        },
        methods: {
            handleChange(val) {
                console.log(val)
                this.$emit('update', val)
            }
        }
    }
</script>

<style scoped>

</style>