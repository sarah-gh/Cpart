const state = {
    li:[
        {
            id: 0,
            name:"dashboard",
            link: "/dashboard",
            p: "داشبورد",
            bg_width: "120",
            bg_height: "180",
            i_width:"45",
            i_height:"45",
            'component':'svg-dashboard'
        },
        {
            id:1,
            name:"projects",
            link: "/projects",
            p: "پروژه ها",
            bg_width: "120",
            bg_height: "180",
            i_width:"25",
            i_height:"30",
            'component':'svg-project'
        },
        {
            id:2,
            name:"zones",
            link: "/zones",
            p: "زون ها",
            bg_width: "120",
            bg_height: "180",
            i_width:"80",
            i_height:"80",
            'component':'svg-construction'
        },
        {
            id:3,
            name:"reports",
            link: "/reports",
            p: "گزارشات",
            bg_width: "120",
            bg_height: "180",
            i_width:"25",
            i_height:"25",
            'component':'svg-statistics'
        },
        {
            id:4,
            name:"accidents",
            link: "/accidents",
            p: "حوادث",
            bg_width: "120",
            bg_height: "180",
            i_width:"80",
            i_height:"80",
            'component':'svg-accident'
        },
        {
            id:5,
            name:"group",
            link: "/group",
            p: "افراد",
            bg_width: "120",
            bg_height: "180",
            i_width:"25",
            i_height:"25",
            'component':'svg-group'
        },
        {
            id:6,
            name:"document",
            link: "/document",
            p: "document",
            bg_width: "120",
            bg_height: "180",
            i_width:"25",
            i_height:"25",
            'component':'svg-book'
        },
        {
            id:7,
            name:"user",
            link: "/user",
            p: "user",
            bg_width: "120",
            bg_height: "180",
            i_width:"25",
            i_height:"25",
            'component':'svg-user'
        },
        {
            id:8,
            name:"accidents5",
            link: "/out",
            p: "خروج",
            bg_width: "120",
            bg_height: "180",
            i_width:"90",
            i_height:"90",
            'component':'svg-logout'
        },
    ]
}


const getters = {
    // get_projects(state){
    //     return state.projects
    // },
    get_li(state){
        return state.li
    },
}

const actions = {

}

export default {
    state,
    getters,
    actions
}