<template>
    <span class="badge bg-indigo-lt">{{ id }}</span>
</template>

<script>
export default {
    props: ['commonName', 'id']
};
</script>