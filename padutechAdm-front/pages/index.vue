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

    async mounted(){

        if(!this.$store.state.user.apiResources){
            try{
                const resources = await this.$axios.get('/api/users/resources')
                this.setResources(resources.data)

                setTimeout(() => {
                    this.ready = true
                }, 1000)

            } catch(error){
                this.error = true
                this.ready = true
                
                console.log(error)
            }
        }

        this.ready = true
    }, 

    methods: {
        async sair(){
            await this.$auth.logout()
        },

        async setResources (resources) {

            await this.$store.commit('user/setResources', resources);
        }
    }
}
</script>