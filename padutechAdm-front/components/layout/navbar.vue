<template>
    <header class="navbar navbar-expand-md navbar-light d-none d-lg-flex d-print-none">
        <div class="container-xl">
          <div class="navbar-nav flex-row order-md-last">
            <div class="d-none d-md-flex">
              <div class="nav-item dropdown d-none d-md-flex me-3">
                <navbar-notification />
              </div>
            </div>
            <div class="nav-item dropdown">
              <navbar-usermenu />
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbar-menu">
            <!-- <navbar-search /> -->
          </div>
        </div>
    </header>
</template>