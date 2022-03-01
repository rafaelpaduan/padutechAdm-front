<template>
    <span>
        <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span class="avatar avatar-sm" style="background-image: url(/profile/profile.svg)"></span>
            <div class="d-none d-xl-block ps-2">
                <div>Paweł Kuna</div>
                <div class="mt-1 small text-muted">UI Designer</div>
            </div>
        </a>
        <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item">Set status</a>
            <a href="#" class="dropdown-item">Profile &amp; account</a>
            <a href="#" class="dropdown-item">Feedback</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Settings</a>
            <a @click="logout()" class="dropdown-item">Logout</a>
        </div>
    </span>
</template>

<script>
export default {
    methods: {
        async logout(){
            await this.$auth.logout()
        }
    }
}
</script>