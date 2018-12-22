<template>
    <div class="upload">
        <el-upload
                class="upload-demo"
                drag
                :show-file-list="true"
                :limit="limit"
                :on-exceed="handleExceed"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :on-error="handleError"
                :on-change="handleChange"
                :file-list="fileList"
                :action="actionUrl">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <figure class="image" v-show="image !== ''">
            <img :src="image">
        </figure>
    </div>
</template>

<script>
    import { BASE_URL } from "../../apis/request"

    export default {
        name: "CkUpload",
        data() {
            return {
                actionUrl: BASE_URL + '/files/upload',
                fileList: [],
                limit:1,
            }
        },
        props: {
            image: {
                type: String
            }
        },
        watch: {
            image(val) {
                console.log(val)
                this.fileList = [{name:val, url: val}]
            }
        },
        methods: {
            handleExceed() {
                this.$store.dispatch('showNotification', {
                    notiShow: true,
                    notiType: 'danger',
                    notiText: '只允许上传一张图片，请删除后重试!',
                })
            },
            handleRemove() {
                this.$emit('update', '')
            },
            handleSuccess(response) {
                // 若返回是本地链接，加上后端域名，本地开发用
                if (!response.url.startsWith('http'))
                    response.url = BASE_URL + response.url
                this.$emit('update', response.url)
                console.log(response)
            },
            handleError(err, file, fileList) {
                console.log(err, file, fileList)
            },
            handleChange(file, fileList) {
                console.log(file, fileList)
            }
        }
    }
</script>

<style scoped>
    figure {
        margin-top: 20px;
    }
</style>