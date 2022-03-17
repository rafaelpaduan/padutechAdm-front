<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <div class="col-12">
                <card-user />
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
        try {
                this.ready = true
            
        } catch (error) {
            this.error = true
            this.ready = true
            
            console.log(error)
        }
    },
}
</script>