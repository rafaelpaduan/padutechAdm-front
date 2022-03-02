<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <div class="col-6">
                <card-user />
            </div>
            <div class="col-6">
                <card-activity />
            </div>
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

    async mounted() {

        // console.log(this.$store.state.user.apiUser)

        try{
            const user = await this.$axios.get('/api/users/' + this.$auth.user.userId)
            this.setUser(user.data)

            setTimeout(() => {
                this.ready = true
            }, 1000)

        } catch(error){
            this.error = true
            this.ready = true
            
            console.log(error)
        }
    },

    methods: {
        async setUser (user) {

            await this.$store.commit('user/set', user);
        }
    }
}
</script>