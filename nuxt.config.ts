// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["nuxt-icon", "@pinia/nuxt"],
    css: [
        "~/assets/styles/main.css",
        "@mdi/font/css/materialdesignicons.min.css",
        "~/assets/styles/mixin.scss",
        "~/assets/styles/variables.scss",
    ],
    build: {
        transpile: ["vuetify"],
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
});
