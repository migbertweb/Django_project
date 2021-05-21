const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        'postcss-preset-env',
        tailwindcss
    ],
};

//module.exports = {
//     plugins: [
//         require("tailwindcss")
//         ("./tailwind.config.js"),
//         require("autoprefixer"),
//     ],
// }