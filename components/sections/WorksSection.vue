<script setup lang="ts">
import { works } from "~/data/works";

const statusLabel = (status: string) => {
  switch (status) {
    case "public":
      return "Public";
    case "private":
      return "Private";
    case "archived":
      return "Archived";
    default:
      return status;
  }
};
</script>

<template>
  <section id="works" class="section relative overflow-hidden">
    <!-- 背景ドット装飾 -->
    <span
      aria-hidden="true"
      class="absolute inset-0 opacity-40 pointer-events-none"
      style="background-image: radial-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px); background-size: 24px 24px; mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%); -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);"
    />
    <span
      aria-hidden="true"
      class="absolute top-1/3 right-[-10%] w-[440px] h-[440px] rounded-full opacity-40 blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent 70%);"
    />

    <div class="relative max-w-6xl mx-auto">
      <ScrollReveal>
        <p class="section-subtitle">Works</p>
        <h2 class="section-title">
          <span class="title-underline">
            制<span class="accent">作物</span>
          </span>
        </h2>
        <p class="mt-4 text-sm text-slate-500 dark:text-slate-400">
          業務外で個人的に制作したツール・ゲームです。
        </p>
      </ScrollReveal>

      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScrollReveal v-for="work in works" :key="work.id">
          <article class="card h-full flex flex-col tilt">
            <header>
              <div class="flex items-center justify-between mb-4">
                <span
                  class="tag"
                  :class="{ 'tag-accent': work.status === 'public' }"
                >
                  <span
                    v-if="work.status === 'public'"
                    class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"
                  />
                  {{ statusLabel(work.status) }}
                </span>
                <div class="flex items-center gap-3">
                  <a
                    v-if="work.demoUrl"
                    :href="work.demoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs font-semibold text-gradient inline-flex items-center gap-1 hover:opacity-80 transition"
                    aria-label="デモページを開く"
                  >
                    Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </a>
                  <a
                    v-if="work.repoUrl"
                    :href="work.repoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs text-slate-500 hover:text-accent-500 transition inline-flex items-center gap-1"
                    aria-label="GitHubで開く"
                  >
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 class="text-xl font-bold tracking-tight" style="font-family: 'Playfair Display', 'Noto Serif JP', serif;">
                {{ work.title }}
              </h3>
              <p class="mt-1 text-xs text-slate-500 dark:text-slate-400 italic">
                {{ work.tagline }}
              </p>
            </header>

            <p class="mt-4 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {{ work.description }}
            </p>

            <ul class="mt-4 space-y-2 text-sm">
              <li
                v-for="(p, i) in work.points"
                :key="i"
                class="text-slate-700 dark:text-slate-200 pl-5 relative"
              >
                <span
                  class="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-gradient-to-br from-accent-400 to-royal-500 shadow-[0_0_6px_rgba(139,92,246,0.5)]"
                />
                {{ p }}
              </li>
            </ul>

            <div class="mt-auto pt-5">
              <div class="h-px bg-gradient-to-r from-transparent via-slate-300/40 dark:via-slate-600/40 to-transparent mb-4" />
              <div class="flex flex-wrap gap-1.5">
                <span v-for="t in work.tech" :key="t" class="tag text-[10px]">
                  {{ t }}
                </span>
              </div>

              <p
                v-if="work.statusNote"
                class="mt-3 text-xs text-slate-500 dark:text-slate-400 italic"
              >
                {{ work.statusNote }}
              </p>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
