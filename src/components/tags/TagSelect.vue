<template>
    <el-select placeholder="请选择" v-model="selectedTags"
               multiple
               filterable
               allow-create
               default-first-option
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
    import { getAll } from "../../apis/tags"
    export default {
        name: "TagSelect",
        props: ['tags'],
        data(){
            return {
                selectedTags:[],
                options: []
            }
        },
        created() {
            this.selectedTags = this.tags
            getAll().then(response => {
                console.log(response)
                this.options = response.data.data.map(function (item) {
                    return {value: item.id, label: item.name}
                })
            })
        },
        watch: {
            tags(val) {
                this.selectedTags = val
            }
        },
        methods:{
            handleChange(val) {
                console.log(val)
                this.$emit('update', val)
            }
        }
    }
</script>

<style scoped>

</style>