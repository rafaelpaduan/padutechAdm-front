<template>
<div class="col-12">
    <div class="card">
        <table class="table table-vcenter table-mobile-md card-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th class="w-1"></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="client in clients" :key="client.id">
                    <td>
                        <div class="d-flex py-1 align-items-center">
                            <span class="avatar me-2">US</span>
                            <div class="flex-fill">
                                <div class="font-weight-medium">{{ client.common_name }}</div>
                                <div class="text-muted"><a href="#" class="text-reset">{{ client.company_name }}</a></div>
                            </div>
                        </div>
                    </td>
                    <td class="text-muted" data-label="Role">
                        Cliente
                    </td>
                    <td>
                        <div class="btn-list flex-nowrap">
                            <NuxtLink :to="{ name: 'clients-edit', params: { id: client.id }}" class="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path><path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path><line x1="16" y1="5" x2="19" y2="8"></line></svg>
                            </NuxtLink>
                            <a href="#" class="" data-bs-toggle="modal" :data-bs-target="'#dropClientModal' + client.id">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="7" x2="20" y2="7"></line><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>
                            </a>
                            <clients-modal-danger :modalId="'dropClientModal' + client.id" :client="client" ></clients-modal-danger>
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