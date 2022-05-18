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
                    <!-- <td>
                        <div class="btn-list flex-nowrap">
                            
                        </div>
                    </td> -->
                    <td class="text-end">
                        <div class="dropdown">
                            <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                            <div class="dropdown-menu dropdown-menu-end">
                                <h6 class="dropdown-header">Menu do Cliente</h6>
                                <NuxtLink :to="{ name: 'clients-tree', params: { id: client.id }}" class="dropdown-item">
                                Visualizar Árvore
                                </NuxtLink>
                                <NuxtLink :to="{ name: 'clients-edit', params: { id: client.id }}" class="dropdown-item">
                                Editar
                                </NuxtLink>
                                <div class="dropdown-divider"></div>
                                <a href="#" data-bs-toggle="modal" :data-bs-target="'#dropClientModal' + client.id" class="dropdown-item">
                                    Deletar
                                </a>
                                <clients-modal-danger :modalId="'dropClientModal' + client.id" :client="client" ></clients-modal-danger>
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