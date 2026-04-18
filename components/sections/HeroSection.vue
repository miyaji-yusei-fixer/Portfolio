<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section class="gradient-hero relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
      <div class="max-w-3xl">
        <p class="section-subtitle animate-fade-in">Portfolio</p>
        <h1 class="text-4xl md:text-6xl font-bold leading-tight tracking-tight animate-fade-in-up">
          <span class="block">{{ profile.headlineEn }}</span>
          <span class="block mt-2 md:mt-3 text-slate-600 dark:text-slate-300 text-xl md:text-2xl font-medium">
            {{ profile.headlineJa }}
          </span>
        </h1>
        <p class="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl animate-fade-in-up">
          {{ profile.tagline }}
        </p>

        <div class="mt-10 flex flex-wrap gap-3 animate-fade-in-up">
          <a
            href="#career"
            class="inline-flex items-center px-5 py-2.5 rounded-full bg-accent-600 hover:bg-accent-700 text-white text-sm font-medium transition shadow-sm"
          >
            職務経歴を見る
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#works"
            class="inline-flex items-center px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-accent-500 dark:hover:border-accent-400 text-sm font-medium transition"
          >
            作品を見る
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
