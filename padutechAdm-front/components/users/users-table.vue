<template>
<div class="col-12">
    <div class="card">
        <table class="table table-vcenter table-mobile-md card-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Role</th>
                <th class="w-1"></th>
            </tr>
            </thead>
            <tbody>
                <table-row v-for="user in users" :key="user.id" :user="user" />
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

    beforeMount() {
        this.users = this.$users;
    },

    computed: {
        $users(){
            return this.$store.getters['users/getUsers'];
        }
    }
}
</script>