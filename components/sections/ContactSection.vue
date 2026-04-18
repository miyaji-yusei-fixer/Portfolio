<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section id="contact" class="section relative overflow-hidden">
    <!-- Heroと同系統の装飾 -->
    <span
      aria-hidden="true"
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full opacity-50 blur-3xl pointer-events-none"
      style="background: radial-gradient(ellipse, rgba(139, 92, 246, 0.28), transparent 70%);"
    />
    <span
      aria-hidden="true"
      class="absolute top-20 left-1/2 -translate-x-1/2 w-[560px] h-[300px] rounded-full opacity-40 blur-3xl pointer-events-none"
      style="background: radial-gradient(ellipse, rgba(59, 130, 246, 0.28), transparent 70%);"
    />

    <div class="relative max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <p class="section-subtitle justify-center" style="display: inline-flex;">Contact</p>
        <h2 class="section-title">
          <span class="title-underline">
            <span class="accent">Let's</span> talk.
          </span>
        </h2>
        <p class="mt-8 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg max-w-xl mx-auto">
          ご連絡いただく場合は、エージェント経由または下記のGitHub経由でお願いいたします。
        </p>

        <div class="mt-12 flex flex-wrap gap-4 justify-center">
          <a
            v-for="link in profile.social"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            <svg v-if="link.icon === 'github'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.754-1.335-1.754-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.933 0-1.312.47-2.382 1.236-3.222-.135-.304-.54-1.527.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.649.24 2.872.12 3.176.765.84 1.23 1.91 1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .32.216.693.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {{ link.label }}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </a>
        </div>

        <!-- 装飾ライン -->
        <div class="mt-20 flex items-center justify-center gap-4 text-slate-400 dark:text-slate-600">
          <span class="h-px w-16 bg-gradient-to-r from-transparent to-slate-400/50" />
          <span class="text-[10px] uppercase tracking-[0.4em]">Thank you</span>
          <span class="h-px w-16 bg-gradient-to-l from-transparent to-slate-400/50" />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
