<script setup lang="ts">
import { profile } from "~/data/profile";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-slate-800 mt-20">
    <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-slate-500 dark:text-slate-400">
      <p>© {{ year }} {{ profile.name }} ({{ profile.nameEn }})</p>
      <p>Built with Nuxt 3 · Deployed on GitHub Pages</p>
    </div>
  </footer>
</template>
