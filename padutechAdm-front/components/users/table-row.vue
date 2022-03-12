<template>
<tr>
    <td>
    <div class="d-flex py-1 align-items-center">
        <!-- <span class="avatar me-2" style="background-image: url(./static/avatars/010m.jpg)"></span> -->
        <span class="avatar me-2">US</span>
        <div class="flex-fill">
        <div class="font-weight-medium">{{ user.nickName }}</div>
        <div class="text-muted"><a href="#" class="text-reset">{{ user.email }}</a></div>
        </div>
    </div>
    </td>
    <td>
    <div>@{{ user.username }}</div>
    <!-- <div class="text-muted">Business Development</div> -->
    </td>
    <td class="text-muted" data-label="Role">
    User
    </td>
    <td>
    <div class="btn-list flex-nowrap">
        <NuxtLink :to="{ name: 'users-edit', params: { id: user.id }}" class="btn">
        Edit
        </NuxtLink>
        <!-- <div class="dropdown">
        <button class="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
            Actions
        </button>
        <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="#">
            Action
            </a>
            <a class="dropdown-item" href="#">
            Another action
            </a>
        </div>
        </div> -->
    </div>
    </td>
</tr>
</template>

<script>
export default {
    props: ['user'],

    mounted() {
        console.log(this.user)
    },
}
</script>