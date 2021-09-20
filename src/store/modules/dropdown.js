const state={
    dropdown: [
        {
            id: 1,
            title: "نام پروژه :"

        },
        {
            id: 2,
            title: "نام زون :"
        },
        {
            id: 3,
            title: "نام فعالیت :"
        }
    ],
}
const getters = {
    get_dropdown(state) {
        return state.dropdown
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