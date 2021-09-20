const state={
    options: [
        { text: 'فعالیت شماره 1', id: 1 },
        { text: 'فعالیت شماره 2', id: 2 },
        { text: 'فعالیت شماره 3', id: 3 }
    ],
}
const getters = {
    get_options(state) {
        return state.options
    }
}

const mutations = {
}

const actions = {
}

export default {
    state,
    getters,
    mutations,
    actions
}