<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <p>edit user {{ this.$route.params.id }}</p>
            <pre>{{ user }}</pre>
        </div>
        <error v-if="error" />
        <ready v-if="!ready" />
    </div>
</template>

<script>
export default {

    data() {
        return {
            user: null,
            error: false,
            ready: false
        }
    },

    async mounted() {
        try {
            const userId = this.$route.params.id

            if(!userId){
                throw new Error;
            }

            const user = await this.$axios.get('/api/users/' + userId)
            this.user = user.data

            setTimeout(() => {
                this.ready = true
            }, 200)
            
        } catch (error) {
            this.error = true
            this.ready = true
            
            console.log(error)
        }
    },
}
</script>