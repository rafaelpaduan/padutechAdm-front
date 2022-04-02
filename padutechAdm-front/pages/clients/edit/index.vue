<template>
    <div class="container-xl">
        <div class="row" v-if="!error && ready">
            <div class="col-12">
                <custom-form :fields="clientFields" :object.sync="client">
                    <div class="dropdown float-start">
                        <span class="nav-link">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path><path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path><line x1="16" y1="5" x2="19" y2="8"></line></svg> -->
                            <a href="#" @click="patchClient()" class="btn btn-outline-success w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path><circle cx="12" cy="14" r="2"></circle><polyline points="14 4 14 8 8 8 8 4"></polyline></svg>
                                Salvar
                            </a>
                        </span>
                    </div>
                </custom-form>
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
            clientId: null,
            client: {}
        }
    },

    async mounted() {
        try {

            this.clientId = this.$route.params.id;

            if(!this.clientId){
                throw new Error;
            }

            await this.$axios.get('/api/clients/' + this.clientId).then((response) => {
                this.client = response.data;
            }).catch((error) => {
                throw new Error(error)
            })

            this.ready = true
        } catch (error) {
            this.error = true
            this.ready = true

            console.log(error)
        }
    },

    methods: {
        async patchClient(){

            await this.$axios.patch('/api/clients/' + this.clientId, this.client).then((response) => {
                this.$toast.success('Cliente ' + this.client.common_name + ' Alterado!')
            }).catch((error) => {
                this.$toast.error('Falha ao alterar o cliente ' + this.client.common_name + '!')
                
                if(error.response){
                    console.log(error.response)
                    this.$toast.error(error.response.data.message)
                }
            })
        }
    },
}
</script>