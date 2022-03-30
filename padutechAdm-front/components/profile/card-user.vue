<template>
    <div class="card">
        <div class="card-body">
            <div class="dropdown float-end">
                <span class="nav-link">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path><path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path><line x1="16" y1="5" x2="19" y2="8"></line></svg> -->
                    <a href="#" @click="editUser ? patchUser() : createUser()" class="btn btn-outline-success w-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path><circle cx="12" cy="14" r="2"></circle><polyline points="14 4 14 8 8 8 8 4"></polyline></svg>
                        Salvar
                    </a>
                </span>
            </div>
            <div class="d-flex align-items-center">
                <img src="/profile/profile.svg" class="avatar avatar-lg mb-3 avatar-rounded" alt="profile-image">
                <div class="w-100 ms-3">
                    <h4 class="my-0">{{ user.nickName || '' }}</h4>
                    <p class="text-muted">@{{ user.username || '' }}</p>
                </div>
            </div>

            <div class="row">
                <div class="col-8">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" :value="(user.firstName || '') + ' ' + (user.lastName || '')" disabled autocomplete="off">
                        <label for="floating-input">Nome</label>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" v-model="user.nickName" autocomplete="off">
                        <label for="floating-input">Apelido</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" v-model="user.firstName" autocomplete="off">
                        <label for="floating-input">Primeiro Nome</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" v-model="user.lastName" autocomplete="off">
                        <label for="floating-input">Ultimo Nome</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6" v-if="!editUser">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" v-model="user.username" autocomplete="off">
                        <label for="floating-input">Usuário</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" v-model="user.email" autocomplete="off">
                        <label for="floating-input">e-Mail</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <select class="form-select" id="floatingSelect" v-model="user.gender" aria-label="Floating label select example">
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                        <label for="floatingSelect">Genero</label>
                    </div>
                </div>    
            </div>
            <div class="row" >
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" v-model="user.password" autocomplete="off">
                        <label for="floating-input">Senha</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" v-model="user.password_confirmation" autocomplete="off">
                        <label for="floating-input">Confirme a Senha</label>
                    </div>
                </div>    
            </div>      

            <pre>{{ user }}</pre>                      

            <ul class="social-list list-inline mt-3 mb-0">
                <li class="list-inline-item">
                    <a href="javascript: void(0);" class="social-list-item text-center border-primary text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="javascript: void(0);" class="social-list-item text-center border-danger text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="4" width="16" height="16" rx="4"></rect><circle cx="12" cy="12" r="3"></circle><line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line></svg>    
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="javascript: void(0);" class="social-list-item text-center border-info text-info">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="javascript: void(0);" class="social-list-item text-center border-secondary text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                    </a>
                </li>
                <div class="float-end">
                    <div class="">
                        
                    </div>
                </div>
            </ul>   
        </div>                                 
    </div>
</template>

<script>
export default {

    data() {
        return {
            user: {}
        }
    },

    props: ['editUser'],

    beforeMount() {

        if(this.editUser){
            this.user = this.editUser
        }
    },

    methods: {
        async patchUser(){

            try {
                const response = await this.$axios.patch('/api/users/' + this.user.id, this.user)

                if(response.status === 200){
                    this.$toast.success('Usuário ' + this.user.username + ' Atualizado!')

                    if(this.$auth.user.userId == this.user.id){
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000)
                    }
                } else {
                    this.$toast.warning('Falha ao atualizar o usuário ' + this.user.username + '!')
                }
            } catch (error) {
                this.$toast.error(error)
            }
        }, 

        async createUser(){

            await this.$axios.post('/api/users/', this.user).then((response) => {
                if(response.status === 200){
                    this.$toast.success('Usuário ' + this.user.username + ' Criado!')
                    this.$router.push('/users')
                } else {
                    this.$toast.warning('Falha ao criar o usuário ' + this.user.username + '!')
                }
            }).catch((error) => {

                if(error.response){
                    console.log(error.response)
                    this.$toast.error(error.response.data.message)
                }
            })
        }
    }
}
</script>