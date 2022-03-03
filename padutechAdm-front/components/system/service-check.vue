<template>
    <div class="row g-3 align-items-center">
        <div class="col-auto">
            <span :class="'status-indicator status-indicator-animated status-' + status">
                <span class="status-indicator-circle"></span>
                <span class="status-indicator-circle"></span>
                <span class="status-indicator-circle"></span>
            </span>
            </div>
            <div class="col">
            <h2 class="page-title">
                {{ title }}
            </h2>
            <p class="text-muted" v-if="response">{{ response }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'check_url', 'timeout'],

    data() {
        return {
            status: "orange",
            response: null
        }
    },

    mounted() {

        this.check()

        setInterval(() => {
            this.check()
        }, this.timeout)
        
    },

    methods: {
        async check(){

            try {
                const response = await this.$axios.get(this.check_url)
                response.data.code === 200 ? this.status = "green" : this.status = "orange"
                this.response = response.data.message
            } catch (error) {
                this.status = "red"
                this.response = error.message
            }
        }
    }
}
</script>