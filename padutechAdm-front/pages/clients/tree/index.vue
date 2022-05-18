<template>
    <div class="container-xl">
        <div class="tf-tree" v-if="!error && ready">
            <ul>
                <li>
                    <client-nested :client="clients" />
                </li>
            </ul>
        </div>
        <error v-if="error" />
        <ready v-if="!ready" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            error: false,
            ready: false,
            clientId: null,
            clients: []
        }
    },

    async mounted() {

        this.clientId = this.$route.params.id;

        try {
            const clients = await this.$axios.get('/api/clients/tree/' + this.clientId);
            this.clients = clients.data

            console.log(this.clients)

            setTimeout(() => {
                this.ready = true
            }, 200)
        } catch (error) {
            this.error = true
            this.ready = true
            
            console.log(error)
        }
    }
}
</script>