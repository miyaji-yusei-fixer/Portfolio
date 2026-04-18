<script setup lang="ts">
import { skillCategories } from "~/data/skills";

const maxYears = 8; // ゲージのスケール基準
</script>

<template>
  <section id="skills" class="section" style="background-color: var(--bg-secondary);">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <p class="section-subtitle">Skills</p>
        <h2 class="section-title">スキルセット</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          実務経験年数ベース。ゲージは {{ maxYears }} 年を基準とした相対表示。
        </p>
      </ScrollReveal>

      <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScrollReveal v-for="cat in skillCategories" :key="cat.label">
          <div class="card h-full">
            <div class="flex items-baseline gap-2 mb-5">
              <h3 class="text-base font-bold">{{ cat.label }}</h3>
              <span class="text-xs text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                {{ cat.labelEn }}
              </span>
            </div>
            <ul class="space-y-3">
              <li v-for="skill in cat.items" :key="skill.name">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-sm font-medium">
                    {{ skill.name }}
                    <span
                      v-if="skill.note"
                      class="ml-1 text-[10px] text-accent-600 dark:text-accent-300 align-middle"
                    >
                      ★ {{ skill.note }}
                    </span>
                  </span>
                  <span class="text-xs text-slate-500 dark:text-slate-400">
                    {{ skill.years }} yr
                  </span>
                </div>
                <div class="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    class="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-700"
                    :style="{ width: Math.min(100, (skill.years / maxYears) * 100) + '%' }"
                  />
                </div>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
