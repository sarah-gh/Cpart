// //import Vue from 'vue';
// import { createApp } from 'vue'
// const app = createApp({})

// const components = require.context(
//     './',
//     true,
//     /footer(-\w+)+\.(vue|js)$/,
//     'lazy-once'
// );

// components.keys().forEach(filePath => {
//     const component = components(filePath);
//     const fileName = filePath.split('/').pop().replace(/\.\w+$/, '');

//     app.component(
//         fileName,
//         () => component.default || component
//     )
// });