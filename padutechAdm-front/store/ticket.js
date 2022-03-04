export const state = () => ({
    apiTickets: []
})

export const mutations = {
    setTickets(state, apiTickets){
        state.apiTickets = apiTickets
    }
}

export const getters = {
    getTickets(state){
        return state.apiTickets
    }
}