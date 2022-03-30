<template>
    <div class="page">
        <span v-if="!error && ready">
            <sidebar />
            <div class="page-wrapper">
                <div class="container-xl">
                    <page-header />
                </div>
                <div class="page-body">
                    <Nuxt />
                </div>  
            </div>
        </span>
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

    async beforeMount(){
        
        try{
            const resources = await this.$axios.get('/api/users/resources')
            this.setResources(resources.data)

            const apiUser = await this.$axios.get('/api/users/profile')
            this.setApiUser(apiUser.data)

            setTimeout(() => {
                this.ready = true
            }, 200)

            this.ready = true

        } catch(error){
            // this.error = true
            this.ready = true
            
            console.log(error)
        }
    },

    methods: {
        setResources (resources) {

            this.$store.commit('user/setResources', resources);
        },

        setApiUser (apiUser) {

            this.$store.commit('user/setApiUser', apiUser);
        }
    },
    
}
</script>