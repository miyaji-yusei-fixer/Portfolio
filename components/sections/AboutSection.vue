<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section id="about" class="section">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <p class="section-subtitle">About</p>
        <h2 class="section-title">私について</h2>
      </ScrollReveal>

      <div class="mt-10 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
        <ScrollReveal>
          <div class="card">
            <p class="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              Name
            </p>
            <p class="text-xl font-bold">{{ profile.name }}</p>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ profile.nameEn }}</p>

            <p class="mt-6 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              Role
            </p>
            <p class="text-base font-medium">{{ profile.role }}</p>

            <p class="mt-6 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              Base
            </p>
            <p class="text-base">株式会社 FIXER (2019年4月〜)</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p v-for="(para, i) in profile.about" :key="i">
              {{ para }}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
