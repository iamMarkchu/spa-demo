<template>
    <p class="has-text-centered" v-show="isShow">
        <i class="fas fa-spinner fa-spin"></i>
    </p>
</template>

<script>
    export default {
        name: "Loading",
        props: {
            isShow: {
                default: false,
                type: Boolean
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        color: #00d1b2;
    }
</style>