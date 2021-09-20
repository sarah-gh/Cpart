const state = {
    projects: [{
        id: 1,
        name: 'پروژه برج مروارید',
        progress: 40,
        src: require('@/assets/img/project/500_F_242335276_5qx418MFQMBqTaZgf6SXmryab3X6UBOP.jpg'),
        accidents: 4,
        report: 12,
        regulations: 76
    },
    {
        id: 2,
        name: 'پروژه برج مروارید',
        progress: 20,
        src: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
        accidents: 4,
        report: 52,
        regulations: 76
    },
    {
        id: 3,
        name: 'پروژه برج مروارید',
        progress: 90,
        src: require('@/assets/img/project/james-sullivan-ESZRBtkQ_f8-unsplash.jpg'),
        accidents: 4,
        report: 12,
        regulations: 76
    },
    {
        id: 4,
        name: 'پروژه برج مروارید',
        progress: 70,
        src: require('@/assets/img/project/awmleer-_z0FV0lrOg4-unsplash.jpg'),
        accidents: 4,
        report: 12,
        regulations: 76
    },
    {
        id: 5,
        name: 'پروژه برج مروارید',
        progress: 40,
        src: require('@/assets/img/project/500_F_242335276_5qx418MFQMBqTaZgf6SXmryab3X6UBOP.jpg'),
        accidents: 4,
        report: 12,
        regulations: 76
    },
    {
        id: 6,
        name: 'پروژه برج مروارید',
        progress: 20,
        src: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
        accidents: 4,
        report: 52,
        regulations: 76
    },
    {
        id: 7,
        name: 'پروژه برج مروارید',
        progress: 90,
        src: require('@/assets/img/project/james-sullivan-ESZRBtkQ_f8-unsplash.jpg'),
        accidents: 4,
        report: 12,
        regulations: 76
    },
    {
        id: 8,
        name: 'پروژه برج مروارید',
        progress: 70,
        src: require('@/assets/img/project/awmleer-_z0FV0lrOg4-unsplash.jpg'),
        accidents: 4,
        report: 12,
        regulations: 76
    }
    ]
}
const getters = {

    get_projects(state) {
        return state.projects
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