<script setup lang="ts">
import { profile } from "~/data/profile";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="relative mt-20">
    <!-- グラデーションの装飾ライン -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-royal-500/50 to-transparent" />

    <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-slate-500 dark:text-slate-400">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-7 h-7 rounded-md bg-gradient-royal text-white text-xs font-bold shadow-glow-sm" style="font-family: 'Playfair Display', serif;">
          Y
        </span>
        <p>&copy; {{ year }} {{ profile.name }} ({{ profile.nameEn }})</p>
      </div>
      <p class="text-xs tracking-wide">
        Crafted with <span class="text-gradient font-semibold">Nuxt&nbsp;3</span> · Deployed on GitHub Pages
      </p>
    </div>
  </footer>
</template>
