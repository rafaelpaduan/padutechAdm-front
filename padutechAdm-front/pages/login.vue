<template>
</template>

<script>
export default {

    layout: 'blank',

    mounted() {
        this.$router.push(this.$auth.loginWith("keycloak"))
    }
}
</script>