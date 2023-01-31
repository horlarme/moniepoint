// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'MoniePoint',
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: '' },
                {
                    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                    rel: "stylesheet"
                }
            ],
            script: [
                { type:"module", src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"},
                { nomodule: "true", src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"}
            ]
        }
    },
    css:[
        '~/assets/styles/main.scss',
        '~/node_modules/animate.css/animate.css',
    ],
    build: {
        transpile: ['apexcharts','chart.js'],
    },
    vite: {
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag: string) =>
                        ['ion-icon'].includes(tag)
                }
            }
        }
    },
})
