const state = {
    allProjects: ['پروژه مهر', 'پروژه برج مروارید', 'پروژه آفتاب', 'پروژه آزادی ', 'پروژه پروما', 'پروژه پارک ملت', 'پروژه تچرا', 'پروژه برج زیبا'
    ]
}

const getters = {

    get_all_projects(state) {
        return state.allProjects
    },
    get_length(state) {
        return state.allProjects.length
    }
}

const mutations = {
    set_project(state, newVal) {
        return state.allProjects.push({ ...newVal })
    }
}

const actions = {
    add_project({ commit }, data) {
        commit('set_project', data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}