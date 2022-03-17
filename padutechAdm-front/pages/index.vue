<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <p>hello world!</p>
            <pre>{{ $auth.user }}</pre>
            <pre>{{ $auth.loggedIn }}</pre>
        </div>
        <error v-if="error" />
        <ready v-if="!ready" />
    </div>
</template>

<script>
export default {

    data() {
        return {
            error: false,
            ready: false
        }
    },
    
    mounted() {
        this.ready = true
    },

    methods: {
        async sair(){
            await this.$auth.logout()
        }
    }
}
</script>