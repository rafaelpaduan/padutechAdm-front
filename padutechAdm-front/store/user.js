export const state = () => ({
    apiUser: null,
    apiResources: null
})

export const mutations = {
    set(state, apiUser){
        state.apiUser = apiUser
    },

    setResources(state, apiResources){
        state.apiResources = apiResources
    }
}

export const getters = {
    get(state){
        return state.apiUser
    }
}