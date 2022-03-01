<template>
    <div class="page-header d-print-none">
        <div class="row g-2 align-items-center">
            <div class="col">
                <!-- Page pre-title -->
                <div class="page-pretitle">
                Overview
                </div>
                <h2 class="page-title">
                Combo layout
                </h2>
            </div>
            <!-- Page title actions -->
            <div class="col-12 col-md-auto ms-auto d-print-none">
                <div class="btn-list">
                    <navbar-notification />
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
</style>