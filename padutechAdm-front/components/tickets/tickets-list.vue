<template>
<div class="card">
    <div class="table-responsive">
    <table class="table table-vcenter table-mobile-md card-table">
        <!-- <thead>
        <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Role</th>
            <th class="w-1"></th>
        </tr>
        </thead> -->
        <tbody>
        <tr v-for="ticket in tickets" :key="ticket.id">
            <td>
                <div class="d-flex py-1 align-items-center">
                    <div class="col-3">
                        <div class="row">
                            <div class="col-4"><span class="text-muted">#{{ ticket.id }}</span></div>
                            <div class="col-8"><span class="badge bg-green-lt">{{ ticket.status }}</span></div>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="flex-fill">
                            <div class="font-weight-medium">{{ ticket.title }}</div>
                            <div class="text-muted"><a href="#" class="text-reset">{{ ticket.type }}</a></div>
                        </div>
                    </div>
                </div>
            </td>
            <td data-label="Title">
                <div>VP Sales</div>
                <div class="text-muted">Business Development</div>
            </td>
            <td class="text-muted" data-label="Role">
            User
            </td>
            <td>
            <div class="btn-list flex-nowrap">
                <a href="#" class="btn">
                Edit
                </a>
                <div class="dropdown">
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
  data() {
    return {
      tickets: null,
    };
  },

  beforeMount() {
    this.tickets = this.$tickets;
  },

  computed: {
    $tickets() {
      return this.$store.getters["ticket/getTickets"];
    },
  },
};
</script>