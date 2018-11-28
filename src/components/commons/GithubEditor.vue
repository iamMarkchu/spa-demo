<template>
    <div class="github-editor">
        <div class="tabs is-boxed">
            <ul>
                <li :class="{'is-active': showWrite}" @click="handleWrite"><a>写作</a></li>
                <li :class="{'is-active': showPreviewMD}" @click="handlePreviewMD"><a>预览</a></li>
            </ul>
        </div>
        <div v-show="showWrite">
            <div class="buttons has-addons is-inline-block" style="margin-right: 10px;">
                <span class="button is-small" @click="handleEditorAction('h1')">h1</span>
                <span class="button is-small" @click="handleEditorAction('h2')">h2</span>
                <span class="button is-small" @click="handleEditorAction('h3')">h3</span>
            </div>
            <div class="buttons has-addons is-inline-block" style="margin-right: 10px;">
                <span class="button is-small" @click="handleEditorAction('link')"><i class="fas fa-link"></i></span>
                <el-upload
                        class="button is-small"
                        :action="actionUrl"
                        :show-file-list="false"
                        :file-list="fileList"
                        :on-success="handleSuccess">
                    <i class="fas fa-image"></i>
                </el-upload>
            </div>
            <div class="buttons has-addons is-inline-block" style="margin-right: 10px;">
                <span class="button is-small" @click="handleEditorAction('bold')"><i class="fas fa-bold"></i></span>
                <span class="button is-small" @click="handleEditorAction('italic')"><i class="fas fa-italic"></i></span>
                <span class="button is-small" @click="handleEditorAction('code')"><i class="fas fa-code"></i></span>
            </div>
            <div class="buttons has-addons is-inline-block" style="margin-right: 10px;">
                <span class="button is-small" @click="handleEditorAction('ul')"><i class="fas fa-list-ul"></i></span>
                <span class="button is-small" @click="handleEditorAction('ol')"><i class="fas fa-list-ol"></i></span>
                <span class="button is-small" @click="handleEditorAction('quote')"><i class="fas fa-quote-left"></i></span>
                <span class="button is-small" @click="handleEditorAction('hr')">&lt;hr/&gt;</span>
            </div>
            <div class="buttons has-addons is-inline-block" style="margin-right: 10px;">
                <span class="button is-small"><i class="fas fa-question-circle"></i></span>
            </div>
            <textarea class="textarea" rows="20" placeholder="请输入内容..." v-bind:value="value" v-on:input="$emit('input', $event.target.value)" ref="content"></textarea>
        </div>
        <div v-show="showPreviewMD" class="content" v-html="htmlContent"></div>
        <hr>
    </div>
</template>

<script>
    import showdown from "showdown"
    import { BASE_URL } from "../../apis/request"
    export default {
        name: "GithubEditor",
        props: ['value'],
        created() {
            this.converter = new showdown.Converter()
            window.onbeforeunload = function(e) {
                let dialogText = 'Dialog text here';
                e.returnValue = dialogText;
                return dialogText;
            };
        },
        data() {
            return {
                showWrite: true,
                showPreviewMD: false,
                htmlContent: '',
                converter: null,
                actionUrl: BASE_URL + '/files/upload',
                fileList: [],
            }
        },
        methods: {
            handleWrite() {
                this.showWrite = true
                this.showPreviewMD = false
                this.htmlContent = ''
            },
            handlePreviewMD() {
                this.showWrite = false
                this.showPreviewMD = true
                this.htmlContent = this.converter.makeHtml(this.value)
            },
            handleEditorAction(type) {
                let pendingText = ''
                switch (type) {
                    case 'h1':
                        pendingText = "# "
                        break
                    case 'h2':
                        pendingText = "## "
                        break
                    case 'h3':
                        pendingText = "### "
                        break
                    case 'link':
                        pendingText = "[]()"
                        break
                    case 'bold':
                        pendingText = "****"
                        break
                    case 'italic':
                        pendingText = "__"
                        break
                    case 'code':
                        pendingText = "``"
                        break
                    case 'ul':
                        pendingText = "-"
                        break
                    case 'ol':
                        pendingText = "1."
                        break
                    case 'quote':
                        pendingText = "> "
                        break
                    case 'hr':
                        pendingText = "___"
                        break
                }
                this.$emit('input', this.value + pendingText)
            },
            handleSuccess(response) {
                console.log(response)
                this.$emit('input', this.value + "![" + response.original_name + "]("+ response.url +")")
            }
        },
        destroyed() {
            window.onbeforeunload = null
        }
    }
</script>

<style scoped>

</style>