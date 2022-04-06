<template>
    <span v-if="ready">
        <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span class="avatar avatar-sm" style="background-image: url(/profile/profile.svg)"></span>
            <div class="d-xl-block ps-2">
                <div>{{ $user.nick_name }}</div>
                <div class="mt-1 small text-muted">@{{ $user.username }}</div>
            </div>
        </a>
        <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <!-- <a href="#" class="dropdown-item">Set status</a> -->
            <NuxtLink to="/profile" class="dropdown-item">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="4" width="18" height="16" rx="3"></rect><circle cx="9" cy="10" r="2"></circle><line x1="15" y1="8" x2="17" y2="8"></line><line x1="15" y1="12" x2="17" y2="12"></line><line x1="7" y1="16" x2="17" y2="16"></line></svg>
                </span>
                <span class="nav-link-title">
                    Perfil
                </span>
            </NuxtLink>
            <!-- <a href="#" class="dropdown-item">Feedback</a> -->
            <div class="dropdown-divider"></div>
            <!-- <a href="#" class="dropdown-item">Settings</a> -->
            <a @click="logout()" class="dropdown-item">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M7 12h14l-3 -3m0 6l3 -3"></path></svg>
                </span>
                <span class="nav-link-title">
                    Sair
                </span>
            </a>
        </div>
    </span>
</template>

<script>
export default {
    
    data() {
        return {
            ready: false
        }
    },

    mounted() {
        this.ready = true
    },
    
    methods: {
        async logout(){
            this.ready = false
            await this.$auth.logout()
            window.location.reload()
        }
    },

    computed: {
        $user(){
            return {...this.$store.getters['user/get']}
        }
    }
}
</script>