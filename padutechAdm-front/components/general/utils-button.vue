<template>
    <NuxtLink v-if="!hide" :to="url || ''" :class="classes">
        <slot></slot>
        {{ text }}
    </NuxtLink>
</template>

<script>
export default {
    props: ['classes', 'text', 'url', 'hide']
}
</script>