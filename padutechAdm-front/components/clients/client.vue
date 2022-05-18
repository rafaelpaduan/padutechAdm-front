<template>
    <div class="card">
        <div class="card-body p-4 text-center">
            <h3 class="m-0 mb-1"><a href="#">{{ commonName }}</a></h3>
            <div class="text-muted">UI Designer</div>
            <div class="mt-3">
                <span class="badge bg-purple-lt">#{{ id }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['commonName', 'id']
};
</script>