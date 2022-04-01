<template>
<div class="col-12">
    <div class="card">
        <table class="table table-vcenter table-mobile-md card-table">
            <thead>
            <tr>
                <th>Name</th>
                <!-- <th>Title</th> -->
                <th>Role</th>
                <th class="w-1"></th>
            </tr>
            </thead>
            <tbody>
                <clients-table-row v-for="client in clients" :key="client.id" :client="client" />
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            users: null
        };
    },

    props: ['clients'],

    beforeMount() {
        this.users = this.$users;
    }
}
</script>