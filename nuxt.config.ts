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
  storybook: {
    addons: ["@storybook/addon-controls", "@storybook/addon-notes"],
    stories: ["~/stories/**/*.stories.js"],
    port: 3003,
    parameters: {
      backgrounds: {
        default: "white",
        values: [
          { name: "white", value: "#ffffff" },
          { name: "gray", value: "#aaaaaa" },
        ],
      },
    },
    decorators: ["<v-app><story/></v-app>"],
    modules: {
      exclude: ["module_name"],
    },
  },
});
