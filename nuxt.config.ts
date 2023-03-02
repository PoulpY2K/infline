// https://nuxt.com/docs/api/configuration/nuxt-config
import {getIconCollections, iconsPlugin} from "@egoist/tailwindcss-icons";

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        cssPath: '~/assets/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        config: {
            plugins: [
                iconsPlugin({
                    // Select the icon collections you want to use
                    collections: getIconCollections(["basil", "lucide"]),
                }),
                require('@tailwindcss/forms')
            ],
            content: []
        }
    }
})
