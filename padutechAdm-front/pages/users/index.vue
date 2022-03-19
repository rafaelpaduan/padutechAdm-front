<template>
    <div class="container-xl">
        <div class="row row-cards" v-if="!error && ready">
            <page-utils-bar>
                <template v-slot:actions>
                    <utils-button 
                        classes="btn btn-sm ms-auto btn-primary"
                        text="Buscar"
                        :hide="true"
                    >
                        <slot>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
                        </slot>
                    </utils-button>
                    <utils-button 
                        classes="btn btn-sm ms-auto btn-outline-success"
                        text="Novo"
                        url="/users/create"
                    >
                        <slot>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </slot>
                    </utils-button>
                </template>
            </page-utils-bar>
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