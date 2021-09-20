const state = {
    users: [{
        id: 1,
        firstName: 'علی',
        lastName: 'علی آبادی',
        phoneNumber: '09153564621',
        svg: 'engineer'
    },
    {
        id: 2,
        firstName: 'علی',
        lastName: 'علی آبادی',
        phoneNumber: '09153564621',
        svg: 'engineer'
    },
    {
        id: 3,
        firstName: 'علی',
        lastName: 'علی آبادی',
        phoneNumber: '09153564621',
        svg: 'engineer'
    },
    {
        id: 4,
        firstName: 'علی',
        lastName: 'علی آبادی',
        phoneNumber: '09153564621',
        svg: 'engineer'
    },
    {
        id: 5,
        firstName: 'علی',
        lastName: 'علی آبادی',
        phoneNumber: '09153564621',
        svg: 'engineer'
    },
    {
        id: 6,
        firstName: 'علی',
        lastName: 'علی آبادی',
        phoneNumber: '09153564621',
        svg: 'engineer'
    },
    {
        id: 7,
        firstName: 'علی',
        lastName: 'علی آبادی',
        phoneNumber: '09153564621',
        svg: 'engineer'
    },
    {
        id: 8,
        firstName: 'علی',
        lastName: 'علی آبادی',
        phoneNumber: '09153564621',
        svg: 'engineer'
    }
    ],
    people: []
}

const getters = {
    get_users(state) {
        return state.users
    },
    get_people(state) {
        return state.people
    }
}

const mutations = {
    set_people(state, newVal) {
        return state.people = newVal
    }
}

const actions = {
    add_people({ commit }, data) {
        commit('set_people', data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

