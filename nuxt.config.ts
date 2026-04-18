// https://nuxt.com/docs/api/configuration/nuxt-config
// GitHub Pages (User Project Pages) でサブパス配信するため baseURL を設定
const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction ? "/Portfolio/" : "/";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // 静的サイト生成
  ssr: true,
  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      ignore: ["/resume"],
    },
  },

  // /resume は公開しない (sandbox制約でファイル削除不可のためリダイレクト処理)
  routeRules: {
    "/resume": { redirect: "/" },
  },

  app: {
    baseURL: BASE_URL,
    head: {
      htmlAttrs: { lang: "ja" },
      title: "宮路 祐誠 | Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Frontend Engineer × Project Manager。TypeScript / Vue / React を軸に、金融・公共・医療のシステム開発に従事。",
        },
        { name: "theme-color", content: "#0f172a" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: `${BASE_URL}favicon.svg` },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap",
        },
      ],
    },
  },

  modules: [
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
  ],

  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
    storageKey: "portfolio-color-mode",
  },

  // Tailwind は postcss.config.js 経由 + main.css で @tailwind ディレクティブを読み込む
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: BASE_URL,
    },
  },
});
