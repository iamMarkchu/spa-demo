<template>
    <div :class="notificationClass" v-show="isShow">
        <button class="delete" @click="resetNotification"></button>
        {{ notiText }}
    </div>
</template>

<script>
    export default {
        name: "Notification",
        props: {
            isShow: {
                default: true,
                type: Boolean
            },
            notiType: {
                default: 'primary',
                type: String
            },
            notiText: String
        },
        computed: {
            //  container is-danger
            notificationClass() {
                return {
                    container: true,
                    notification: true,
                    // 'has-text-centered': true,
                    'is-danger': (this.notiType === 'danger'),
                    'is-primary': (this.notiType === 'primary'),
                    'is-success': (this.notiType === 'success'),
                    'is-info': (this.notiType === 'info'),
                }
            }
        },
        methods: {
            resetNotification() {
                this.$store.commit('setNoti', {
                    notiShow: false,
                    notiType: 'primary',
                    notiText: '',
                })
            }
        }
    }
</script>

<style scoped>
    .notification {
        margin-top: 20px;
    }
</style>