<script setup lang="ts">
import { ref } from "vue";
import { works } from "~/data/works";

const { baseUrl } = useRuntimeConfig().public;
const resolveImage = (path: string) => `${baseUrl}${path.replace(/^\//, "")}`;

const lightboxSrc = ref<string | null>(null);
const lightboxAlt = ref("");

const openLightbox = (src: string, alt: string) => {
  lightboxSrc.value = src;
  lightboxAlt.value = alt;
};

const closeLightbox = () => {
  lightboxSrc.value = null;
};

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
  <section id="works" class="section" style="background-color: var(--bg-secondary);">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <p class="section-subtitle">Works</p>
        <h2 class="section-title">制作物</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          業務外で個人的に制作したツール・ゲームです。
        </p>
      </ScrollReveal>

      <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScrollReveal v-for="work in works" :key="work.id">
          <article class="card h-full flex flex-col">
            <header>
              <div class="flex items-center justify-between mb-3">
                <span
                  class="tag"
                  :class="{
                    'tag-accent': work.status === 'public',
                  }"
                >
                  {{ statusLabel(work.status) }}
                </span>
                <div class="flex items-center gap-3">
                  <a
                    v-if="work.demoUrl"
                    :href="work.demoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs text-accent-600 dark:text-accent-300 hover:text-accent-500 transition inline-flex items-center gap-1 font-medium"
                    aria-label="デモページを開く"
                  >
                    Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

              <h3 class="text-lg font-bold">{{ work.title }}</h3>
              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {{ work.tagline }}
              </p>
            </header>

            <div
              v-if="work.image"
              class="mt-4 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 cursor-zoom-in"
              @click="openLightbox(resolveImage(work.image!), `${work.title} のスクリーンショット`)"
            >
              <img
                :src="resolveImage(work.image!)"
                :alt="`${work.title} のスクリーンショット`"
                class="w-full h-auto"
                loading="lazy"
              />
            </div>

            <p class="mt-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ work.description }}
            </p>

            <ul class="mt-4 space-y-1.5 text-sm">
              <li
                v-for="(p, i) in work.points"
                :key="i"
                class="text-slate-700 dark:text-slate-300 pl-4 relative"
              >
                <span class="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent-500" />
                {{ p }}
              </li>
            </ul>

            <div class="mt-auto pt-4">
              <div class="flex flex-wrap gap-1.5">
                <span v-for="t in work.tech" :key="t" class="tag text-[11px]">
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

  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="lightboxSrc"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
        @click="closeLightbox"
      >
        <img
          :src="lightboxSrc"
          :alt="lightboxAlt"
          class="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
          @click.stop
        />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
