<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <div class="col-12">
                <p>Teste 2</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
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