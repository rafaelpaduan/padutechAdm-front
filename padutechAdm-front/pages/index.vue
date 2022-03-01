<template>
    <div class="container-xl">
        <p>hello world!</p>
        <pre>{{ $auth.user }}</pre>
        <pre>{{ $auth.loggedIn }}</pre>
        <button class="btn btn-sm btn-danger" @click="sair()">Sair</button>
    </div>
</template>

<script>
export default {
    mounted(){

        setInterval(async () => {
            console.log(this.$auth.strategy.token.get())
            console.log(this.$auth.strategy.token.status())
        }, 10000)
    }, 

    methods: {
        async sair(){
            await this.$auth.logout()
        }
    }
}
</script>