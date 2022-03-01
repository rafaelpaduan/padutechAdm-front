<template>
  <aside class="navbar navbar-vertical navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <h1 class="navbar-brand navbar-brand-autodark">
            <NuxtLink to="/">
              <img src="~/assets/img/logo/padutech/padutech.png" width="110" height="32" alt="Tabler" class="navbar-brand-image">
            </NuxtLink>
          </h1>
          <hr>
          <div class="collapse navbar-collapse" id="navbar-menu">
            <sidebar-menu />
          </div>
        </div>
      </aside>
</template>

<style scoped>
hr {
  margin: 1rem 0;
}

.pt-lg-3 {
    padding-top: 0 !important;
}
</style>