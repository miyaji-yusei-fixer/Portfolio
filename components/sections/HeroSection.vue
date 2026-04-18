<script setup lang="ts">
import { profile } from "~/data/profile";

const highlights = [
  { label: "Years", value: "7+", note: "Professional" },
  { label: "Role", value: "PM / Lead", note: "Frontend" },
  { label: "Stack", value: "TS · Vue · React", note: "Modern web" },
];
</script>

<template>
  <section class="hero-bg relative overflow-hidden">
    <!-- 浮遊する装飾オーブ -->
    <span
      aria-hidden="true"
      class="hero-orb animate-float-slow"
      style="width: 420px; height: 420px; top: -80px; left: -100px; background: radial-gradient(circle, rgba(59, 130, 246, 0.55), transparent 70%);"
    />
    <span
      aria-hidden="true"
      class="hero-orb animate-float"
      style="width: 360px; height: 360px; top: 30%; right: -120px; background: radial-gradient(circle, rgba(139, 92, 246, 0.55), transparent 70%); animation-delay: -3s;"
    />
    <span
      aria-hidden="true"
      class="hero-orb animate-float-slow"
      style="width: 260px; height: 260px; bottom: -60px; left: 40%; background: radial-gradient(circle, rgba(236, 72, 153, 0.35), transparent 70%); animation-delay: -6s;"
    />

    <div class="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-24 md:pb-32">
      <!-- 肩書きバッジ -->
      <div class="animate-fade-in">
        <span class="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.25em] uppercase">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 animate-ping" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
          </span>
          Portfolio · 2026
        </span>
      </div>

      <h1 class="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in-up" style="font-family: 'Playfair Display', 'Noto Serif JP', serif;">
        <span class="block">
          <span class="text-gradient">Frontend</span>
          <span class="inline-block mx-2 opacity-40">×</span>
        </span>
        <span class="block mt-2">
          Project <span class="text-gradient">Manager</span>.
        </span>
      </h1>

      <p class="mt-8 text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed animate-fade-in-up" style="animation-delay: 0.1s;">
        {{ profile.headlineJa }}
      </p>
      <p class="mt-3 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl animate-fade-in-up" style="animation-delay: 0.2s;">
        {{ profile.tagline }}
      </p>

      <!-- CTA -->
      <div class="mt-12 flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.3s;">
        <a href="#career" class="btn-primary">
          職務経歴を見る
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#works" class="btn-ghost">
          作品を見る
        </a>
      </div>

      <!-- ハイライトカード -->
      <dl class="mt-20 grid grid-cols-3 gap-3 md:gap-6 max-w-2xl animate-fade-in-up" style="animation-delay: 0.45s;">
        <div
          v-for="(h, i) in highlights"
          :key="h.label"
          class="glass rounded-2xl p-4 md:p-5 hover-glow"
          :style="{ animationDelay: `${0.5 + i * 0.1}s` }"
        >
          <dt class="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {{ h.label }}
          </dt>
          <dd class="mt-1 md:mt-2 text-lg md:text-2xl font-bold text-gradient" style="font-family: 'Playfair Display', serif;">
            {{ h.value }}
          </dd>
          <dd class="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {{ h.note }}
          </dd>
        </div>
      </dl>
    </div>

    <!-- スクロールインジケータ -->
    <div
      aria-hidden="true"
      class="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
    >
      <span class="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <span class="w-px h-10 bg-gradient-to-b from-accent-400 to-transparent animate-pulse-slow" />
    </div>
  </section>
</template>
