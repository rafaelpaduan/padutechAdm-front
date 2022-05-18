<template>
    <ul>
        <li v-for="child in client" :key="child.id">
            <span class="tf-nc">
                <client :commonName="child.common_name" :id="child.id" />
            </span>
            <client-nested :client="child.children" />
        </li>
    </ul>
</template>

<script>

export default{
    props: ['client']
}

</script>