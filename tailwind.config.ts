/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            }
        },
    },
    daisyui: {
        themes: [
            {
                moniepoint: {
                   "primary": "#7b66f8",
                    "secondary": "#c4ff53",
                    "accent": "#fcb0fb",
                    "neutral": "#bdbdbd",
                    "base-100": "#f6f5fc",
                    "info": "#517CF0",
                    "success": "#1CE36F",
                    "warning": "#D98E0D",
                    "error": "#F33974",
                },
            },
        ],
    },
    plugins: [
        require('daisyui')
    ],
}
