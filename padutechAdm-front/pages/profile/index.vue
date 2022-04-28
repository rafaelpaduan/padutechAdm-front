<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <div class="col-6">
                <card-user :editUser="$user" />
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

        try{
            this.ready = true

        } catch(error){
            this.error = true
            this.ready = true
            
            console.log(error)
        }
    },

    computed: {
        $user(){
            return {...this.$store.getters['user/get']}
        }
    }
}
</script>