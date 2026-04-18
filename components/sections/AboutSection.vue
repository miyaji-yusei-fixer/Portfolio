<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section id="about" class="section">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <p class="section-subtitle">About</p>
        <h2 class="section-title">
          <span class="title-underline">
            私<span class="accent">について</span>
          </span>
        </h2>
      </ScrollReveal>

      <div class="mt-16 grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 md:gap-14">
        <ScrollReveal>
          <div class="card tilt">
            <!-- プロフィールヘッダ（イニシャル＋グラデ） -->
            <div class="flex items-center gap-4 mb-6">
              <div class="relative w-16 h-16 rounded-2xl bg-gradient-royal flex items-center justify-center text-white font-bold text-xl shadow-glow" style="font-family: 'Playfair Display', serif;">
                YM
                <span class="absolute -inset-1 rounded-2xl bg-gradient-royal opacity-40 blur-lg -z-10" />
              </div>
              <div>
                <p class="text-lg font-bold leading-tight">{{ profile.name }}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 tracking-widest uppercase">{{ profile.nameEn }}</p>
              </div>
            </div>

            <div class="space-y-5">
              <div>
                <p class="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 mb-1.5">
                  Role
                </p>
                <p class="text-sm font-semibold">{{ profile.role }}</p>
              </div>

              <div class="h-px bg-gradient-to-r from-transparent via-slate-300/40 dark:via-slate-600/40 to-transparent" />

              <div>
                <p class="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 mb-1.5">
                  Base
                </p>
                <p class="text-sm">株式会社 FIXER</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">2019年4月〜</p>
              </div>

              <div class="h-px bg-gradient-to-r from-transparent via-slate-300/40 dark:via-slate-600/40 to-transparent" />

              <div>
                <p class="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 mb-1.5">
                  Focus
                </p>
                <div class="flex flex-wrap gap-1.5">
                  <span class="tag tag-accent">Frontend</span>
                  <span class="tag tag-accent">PM / Lead</span>
                  <span class="tag tag-accent">UX</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="relative">
            <!-- 装飾: 引用符マーク -->
            <span
              aria-hidden="true"
              class="absolute -top-6 -left-2 text-7xl md:text-8xl font-bold opacity-10 select-none text-gradient"
              style="font-family: 'Playfair Display', serif; line-height: 1;"
            >
              &ldquo;
            </span>
            <div class="relative space-y-6 text-slate-700 dark:text-slate-200 leading-loose text-[15px] md:text-base">
              <p
                v-for="(para, i) in profile.about"
                :key="i"
                class="relative"
              >
                <span v-if="i === 0" class="float-left mr-2 mt-1 text-4xl md:text-5xl font-bold text-gradient" style="font-family: 'Playfair Display', serif; line-height: 0.85;">
                  {{ para.charAt(0) }}
                </span>
                <span v-if="i === 0">{{ para.slice(1) }}</span>
                <span v-else>{{ para }}</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
