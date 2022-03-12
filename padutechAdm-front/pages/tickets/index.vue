<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <tickets-tab />
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
            const tickets = await this.$axios.get('/api/tickets')
            this.setTickets(tickets.data)

            setTimeout(() => {
                this.ready = true
            }, 200)

        } catch(error){
            this.error = true
            this.ready = true
            
            console.log(error)
        }
    },

    methods: {
        async setTickets (tickets) {

            await this.$store.commit('ticket/setTickets', tickets);
        }
    }
}
</script>