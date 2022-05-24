<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <div class="col-6">
                <table-nested :clients="clientsDesc" />
            </div>
            <div class="col-6">
                <div class="tf-tree">
                    <ul>
                        <li>
                            <client-nested :client="clientsTree" />
                        </li>
                    </ul>
                </div>
            </div>
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
            clientsTree: [],
            clientsDesc: []
        }
    },

    async mounted() {

        this.clientId = this.$route.params.id;

        try {
            this.clientsTree = await this.$axios.$get('/api/clients/tree/' + this.clientId);
            this.clientsDesc = await this.$axios.$get('/api/clients/descendants/' + this.clientId);

            setTimeout(() => {
                this.ready = true
            }, 200)
        } catch (error) {
            this.error = true
            this.ready = true
        }
    }
}
</script>