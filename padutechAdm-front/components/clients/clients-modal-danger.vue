<template>
    <div class="modal modal-blur fade" :id="modalId" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-status bg-danger"></div>
                <div class="modal-body text-center py-4">
                    <!-- Download SVG icon from http://tabler-icons.io/i/alert-triangle -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-danger icon-lg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 9v2m0 4v.01"></path><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path></svg>
                    <h3>Você tem certeza?</h3>
                    <div class="text-muted">Essa ação deletará o cliente <b>{{ client.common_name }}</b>.</div>
                    <div class="text-muted">Você também pode inativar esse cliente.</div>
                </div>
                <div class="modal-footer">
                    <div class="w-100">
                        <div class="row">
                            <div class="col">
                                <a href="#" class="btn w-100" data-bs-dismiss="modal">
                                    Cancelar
                                </a>
                            </div>
                            <div class="col">
                                <a href="#" class="btn btn-primary w-100 disabled" data-bs-dismiss="modal">
                                    Inativar
                                </a>
                            </div>
                            <div class="col">
                                <a href="#" @click="apiDelete()" class="btn btn-danger w-100" data-bs-dismiss="modal">
                                    Deletar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["modalId", "client"],

  methods: {
    apiDelete() {
    	this.$axios.delete("/api/clients/" + this.client.id).then((response) => {
        if(response.status === 200){
          this.$toast.success('Cliente ' + this.client.common_name + ' Deletado!')
          this.$router.push('/clients')
          setTimeout(() => {
                              window.location.reload();
                          }, 2000)
        } else {
          this.$toast.warning('Falha ao deletar o cliente ' + this.client.common_name + '!')
        }
      }).catch((error) => {
        if (error.response) {
          this.$toast.error(error.response.data.message);
        }
      });
    },
  },
};
</script>