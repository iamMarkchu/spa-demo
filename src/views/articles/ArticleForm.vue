<template>
    <div class="box">
        <h1 class="title" v-if="!isEdit">添加文章</h1>
        <h1 class="title" v-else>修改文章</h1>
        <hr>
        <form>
            <div class="field is-grouped">
                <div class="control" v-show="!isEdit">
                    <button class="button is-primary" @click.prevent="onSubmit('1')">发布</button>
                </div>
                <div class="control" v-show="!isEdit">
                    <button class="button is-link" @click.prevent="onSubmit('2')">保存为草稿</button>
                </div>
                <div class="control" v-show="isEdit">
                    <button class="button is-link" @click.prevent="onSubmit('2')">提交</button>
                </div>
                <div class="control">
                    <button class="button is-text" @click.prevent="$router.go(-1)">取消</button>
                </div>
            </div>
            <hr>
            <div class="field">
                <label class="label">标题</label>
                <div class="control">
                    <el-input v-model="title" placeholder="请输入标题"></el-input>
                </div>
            </div>
            <div class="field">
                <label class="label">封面</label>
                <div class="control">
                    <ck-upload :image="cover" @update="cover = $event"></ck-upload>
                </div>
            </div>
            <div class="field">
                <label class="label">标签</label>
                <div class="control">
                    <tag-select :tags="tags" @update="tags = $event"></tag-select>
                </div>
            </div>
            <div class="field">
                <label class="label">类别</label>
                <div class="control">
                    <category-select :categories="categories" @update="categories = $event"></category-select>
                </div>
            </div>
            <div class="field">
                <label class="label">排序</label>
                <div class="control">
                    <el-input-number v-model="order" :min="1" :max="99" label="描述文字"></el-input-number>
                </div>
            </div>
            <div class="field">
                <label class="label">正文</label>
                <div class="control">
                    <github-editor v-model="content"></github-editor>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import CkUpload from './../../components/commons/CkUpload'
    import TagSelect from './../../components/tags/TagSelect'
    import CategorySelect from './../../components/categories/CategorySelect'
    import GithubEditor from './../../components/commons/GithubEditor'
    import { store as storeArticle, show as showArticle, update as updateArticle } from "../../apis/articles"
    export default {
        name: "ArticleForm",
        props: {
            isEdit: Boolean
        },
        data(){
            return {
                id: 0,
                title: '',
                cover: '',
                content: '',
                order: 99,
                tags: [],
                categories: '',
            }
        },
        created() {
            if (this.isEdit) {
                this.id = this.$route.params.id
                showArticle(this.id).then(response => {
                    this.title = response.data.data.title
                    this.cover = response.data.data.cover
                    this.content = response.data.data.content
                    this.order = response.data.data.order
                    this.tags = response.data.data.tags.map(function(item) {
                        return item.id
                    })
                    if (response.data.data.categories.length > 0)
                        this.categories = response.data.data.categories[0].id
                })
            }
        },
        methods: {
            onSubmit(status) {
                let formData = {
                    title: this.title,
                    cover: this.cover,
                    content: this.content,
                    order: this.order,
                    tags: this.tags,
                    categories: [this.categories],
                }
                if (this.isEdit) {
                    updateArticle(formData, this.id).then(() => {
                        this.$message.success('修改成功!')
                        this.$router.go(-1)
                    }).catch(error => {
                        this.$message.error(error.message)
                    })
                } else {
                    formData.status = status
                    storeArticle(formData).then(() => {
                        this.$message.success('保存成功!')
                        this.$router.go(-1)
                    }).catch(error => {
                        this.$message.error(error.message)
                    })
                }
            }
        },
        components: {
            CkUpload, TagSelect,CategorySelect, GithubEditor
        }
    }
</script>

<style scoped>

</style>