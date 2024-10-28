/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            screens: {
                "medium-840-860": { min: "840px", max: "860px" },
                "medium-930-960": { min: "930px", max: "960px" },
                "medium-1140-1160": { min: "1140px", max: "1160px" },
            },
        },
    },
    plugins: [],
};
