const state = {
    reports: [
        {
            count: 1,
            image: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
            registers: "محمد رجایی",
            zone: 'زون شماره 1',
            activity: "فعایت شماره 1",
        },
        {
            count: 2,
            image: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
            registers: "علی رضایی",
            zone: 'زون شماره 1',
            activity: "فعایت شماره 1",
        },
        {
            count: 3,
            image: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
            registers: "علی رضا حسینی",
            zone: 'زون شماره 1',
            activity: "فعایت شماره 1",
        },
        {
            count: 4,
            image: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
            registers: "حسن مشرف",
            zone: 'زون شماره 1',
            activity: "فعایت شماره 1",
        },
        {
            count: 5,
            image: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
            registers: "محمد کاظمی",
            zone: 'زون شماره 1',
            activity: "فعایت شماره 1",
        },
        {
            count: 6,
            image: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
            registers: "الیاس کرمانی",
            zone: 'زون شماره 1',
            activity: "فعایت شماره 1",
        },
        {
            count: 7,
            image: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
            registers: "علی قربانی",
            zone: 'زون شماره 1',
            activity: "فعایت شماره 1",
        },
        {
            count: 8,
            image: require('@/assets/img/project/danist-8Gg2Ne_uTcM-unsplash.jpg'),
            registers: "امیر علی نیک",
            zone: 'زون شماره 1',
            activity: "فعایت شماره 1",
        }

    ]
}
const getters = {
    get_reports(state) {
        return state.reports
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