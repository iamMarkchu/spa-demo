<template>
    <div class="article-index container">
        <div class="box">
            <h1 class="title">文章管理</h1>
            <hr>
            <table class="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>标题</th>
                    <th>类别</th>
                    <th>标签</th>
                    <th>排序</th>
                    <th>状态</th>
                    <th>作者</th>
                    <th>最后修改时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="article in articles">
                    <td>{{ article.id }}</td>
                    <td>
                        <router-link :to="{name: 'article', params: {url: article.id}}">{{ article.title }}
                        </router-link>
                    </td>
                    <td>
                        <div v-if="article.categories.length !== 0">
                            <span class="tag" v-for="category in article.categories" :key="category.id"
                                  style="margin: 5px;">{{ category.name }}</span>
                        </div>
                        <span class="tag" v-else>暂无类别</span>
                    </td>
                    <td>
                        <div v-if="article.tags.length !== 0">
                            <span class="tag" v-for="tag in article.tags" :key="tag.id" style="margin: 5px;">{{ tag.name }}</span>
                        </div>
                        <span class="tag" v-else>暂无类别</span>
                    </td>
                    <td>{{ article.order }}</td>
                    <td><span :class="getClass(article.status)">{{ article.status | showStatus }}</span></td>
                    <td>{{ article.user.name }}</td>
                    <td>{{ article.updated_at }}</td>
                    <td>
                        <router-link class="button is-small is-info operate-btn"
                                     :to="{name: 'article-edit', params: {id: article.id }}">编辑
                        </router-link>
                        <a class="button is-small is-danger operate-btn" v-if="article.status == 1"
                           @click="handleDelete(article.id)">删除</a>
                        <a class="button is-small is-success operate-btn" v-if="article.status == 2"
                           @click="handlePublish(article.id)">发布</a>
                        <a class="button is-small is-light operate-btn" v-if="article.status == 0"
                           @click="handleRevoke(article.id)">恢复</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {getList, del, publish, revoke} from "../../apis/articles"

    export default {
        name: "Index",
        data() {
            return {
                articles: []
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                getList().then(response => {
                    console.log(response)
                    this.articles = response.data.data.data
                }).catch(error => {
                    console.log(error)
                })
            },
            handleDelete(id) {
                this.$confirm('确认删除?')
                    .then(() => {
                        del(id).then(response => {
                            console.log(response)
                            this.$message.success('删除成功!')
                            this.fetchData()
                        })
                    }).catch(() => {
                    console.log('已取消删除操作！')
                })
            },
            handlePublish(id) {
                this.$confirm('确认发布?')
                    .then(() => {
                        publish(id).then(response => {
                            console.log(response)
                            this.$message.success('发布成功!')
                            this.fetchData()
                        })
                    }).catch(() => {
                    console.log('已取消发布操作!')
                })

            },
            handleRevoke(id) {
                this.$confirm('确认恢复?')
                    .then(() => {
                        revoke(id).then(response => {
                            console.log(response)
                            this.$message.success('删除成功!')
                            this.fetchData()
                        })
                    }).catch(() => {
                    console.log('已取消恢复动作！')
                })

            },
            getClass(status) {
                if (status == 1) {
                    return ['tag', 'is-success']
                } else if (status == 2) {
                    return ['tag', 'is-info']
                } else {
                    return ['tag', 'is-danger']
                }
            }
        },
        filters: {
            showStatus(status) {
                if (status == 1) {
                    return '正常'
                } else if (status == 2) {
                    return '草稿'
                } else {
                    return '已删除'
                }
            }
        }
    }
</script>

<style scoped>
    .article-index {
        margin-top: 20px;
    }

    .operate-btn {
        margin: 5px;
    }
</style>