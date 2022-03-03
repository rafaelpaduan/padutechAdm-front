<template>
    <div class="container-xl">
        <service-check title="padutechAdm-account" check_url="/api/users/status" timeout="1000" />
        <service-check title="padutechAdm-tickets" check_url="/api/tickets/status" timeout="1000" />
    </div>
</template>