export const state = () => ({
    apiUsers: null
})

export const mutations = {
    setUsers(state, apiUsers){
        state.apiUsers = apiUsers
    }
}

export const getters = {
    getUsers(state){
        return state.apiUsers
    }
}