<template>
    <div class="page-header d-print-none">
        <div class="row g-2 align-items-center">
            <div class="col-md-auto menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            </div>
            <page-title />
            <!-- Page title actions -->
            <div class="col-12 col-md-auto ms-auto d-print-none">
                <div class="btn-list">
                    <!-- <navbar-notification /> -->
                    <navbar-usermenu />
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>

<style scoped>
.btn-list>* {
    margin: 0 1rem 1rem 0!important;
}

hr {
  margin: .5rem 0;
}

.menu-button {
    margin-right: 1rem;
}
</style>