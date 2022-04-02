<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <div class="col-12">
                <custom-form :fields="clientFields" :object.sync="client">
                    <div class="dropdown float-start">
                        <span class="nav-link">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path><path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path><line x1="16" y1="5" x2="19" y2="8"></line></svg> -->
                            <a href="#" @click="createClient()" class="btn btn-outline-success w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path><circle cx="12" cy="14" r="2"></circle><polyline points="14 4 14 8 8 8 8 4"></polyline></svg>
                                Salvar
                            </a>
                        </span>
                    </div>
                </custom-form>
            </div>
            <div class="col-12" style="margin-top: 1.25rem">
                <pre>{{client}}</pre>
            </div>
        </div>
        <error v-if="error" />
        <ready v-if="!ready" />
    </div>
</template>

<script>

import { clientFields } from '../auxiliar'

export default {

    data(){
        return {
            error: false,
            ready: false,
            clientFields: clientFields,
            client: {}
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

    methods: {
        async createClient(){
            await this.$axios.post('/api/clients', this.client).then((response) => {

                if(response.status > 200){
                    this.$toast.success('Cliente ' + this.client.common_name + ' Criado!')
                    this.$router.push('/clients')
                } else {
                    this.$toast.warning('Falha ao criar o cliente ' + this.client.common_name + '!')
                }
            }).catch((error) => {

                if(error.response){
                    console.log(error.response)
                    this.$toast.error(error.response.data.message)
                }
            })
        }
    },
}
</script>