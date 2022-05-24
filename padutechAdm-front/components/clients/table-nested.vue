<template>
<div class="col-12">
    <div class="card">
        <table class="table table-vcenter table-mobile-md card-table">
            <thead>
            <tr>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="client in clients" :key="client.id">
                    <td>
                        <div class="d-flex py-1 align-items-center">
                            <span class="avatar me-2">{{ client.id }}</span>
                            <div class="flex-fill">
                                <div class="font-weight-medium">{{ client.common_name }}</div>
                                <div class="text-muted"><a href="#" class="text-reset">{{ client.company_name }}</a></div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    props: ['clients']
}
</script>