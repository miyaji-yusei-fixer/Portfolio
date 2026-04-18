<script setup lang="ts">
import { skillCategories } from "~/data/skills";

const maxYears = 8; // ゲージのスケール基準
</script>

<template>
  <section id="skills" class="section relative overflow-hidden">
    <!-- セクション背景のアンビエント -->
    <span
      aria-hidden="true"
      class="absolute -top-20 right-[-10%] w-[420px] h-[420px] rounded-full opacity-60 blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%);"
    />
    <span
      aria-hidden="true"
      class="absolute bottom-[-10%] left-[-10%] w-[380px] h-[380px] rounded-full opacity-50 blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, rgba(59, 130, 246, 0.22), transparent 70%);"
    />

    <div class="relative max-w-6xl mx-auto">
      <ScrollReveal>
        <p class="section-subtitle">Skills</p>
        <h2 class="section-title">
          <span class="title-underline">
            スキル<span class="accent">セット</span>
          </span>
        </h2>
        <p class="mt-4 text-sm text-slate-500 dark:text-slate-400">
          実務経験年数ベース。ゲージは {{ maxYears }} 年を基準とした相対表示。
        </p>
      </ScrollReveal>

      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScrollReveal v-for="(cat, idx) in skillCategories" :key="cat.label">
          <div class="card h-full tilt group">
            <!-- カテゴリヘッダ -->
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-base font-bold tracking-tight">{{ cat.label }}</h3>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 tracking-[0.25em] uppercase">
                  {{ cat.labelEn }}
                </span>
              </div>
              <span
                class="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-royal text-white font-bold text-sm shadow-glow-sm"
                style="font-family: 'Playfair Display', serif;"
              >
                {{ String(idx + 1).padStart(2, "0") }}
              </span>
            </div>

            <ul class="space-y-4">
              <li v-for="skill in cat.items" :key="skill.name">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-sm font-medium flex items-center gap-1.5">
                    {{ skill.name }}
                    <span
                      v-if="skill.note"
                      class="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold tracking-widest uppercase bg-gradient-to-r from-accent-500/20 to-royal-500/20 text-royal-700 dark:text-royal-300 border border-royal-500/30"
                    >
                      ★ {{ skill.note }}
                    </span>
                  </span>
                  <span class="text-[11px] text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                    {{ skill.years }}y
                  </span>
                </div>
                <div class="gauge-track">
                  <div
                    class="gauge-bar"
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
