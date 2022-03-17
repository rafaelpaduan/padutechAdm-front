<template>
    <div class="container-xl">
        <div class="row row-cards" v-if="!error && ready">
            <page-utils-bar />
            <users-table />
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
            const users = await this.$axios.get('/api/users')
            this.setUsers(users.data)

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
        async setUsers (users) {

            await this.$store.commit('users/setUsers', users);
        }
    }
}
</script>