<script setup lang="ts">
import { careers, careerNote } from "~/data/career";
</script>

<template>
  <section id="career" class="section">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <p class="section-subtitle">Career</p>
        <h2 class="section-title">職務経歴</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          顧客名は機密保持のため、業界・規模で表記しています。
        </p>
      </ScrollReveal>

      <div class="mt-12 relative">
        <!-- タイムラインの縦線 -->
        <div
          aria-hidden="true"
          class="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800"
        />

        <ol class="space-y-10">
          <li v-for="career in careers" :key="career.id" class="relative">
            <!-- タイムラインの点 -->
            <span
              aria-hidden="true"
              class="absolute left-4 md:left-6 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-500 ring-4 ring-white dark:ring-slate-900"
            />

            <ScrollReveal>
              <div class="pl-12 md:pl-16">
                <p class="text-xs font-semibold tracking-widest text-accent-600 dark:text-accent-400 uppercase">
                  {{ career.period }}
                </p>
                <h3 class="mt-1 text-xl md:text-2xl font-bold">
                  {{ career.title }}
                </h3>
                <p class="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                  {{ career.industry }}
                </p>

                <dl class="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div class="flex gap-2">
                    <dt class="text-slate-500 dark:text-slate-400 w-20 shrink-0">Role</dt>
                    <dd class="font-medium">{{ career.role }}</dd>
                  </div>
                  <div class="flex gap-2">
                    <dt class="text-slate-500 dark:text-slate-400 w-20 shrink-0">Team</dt>
                    <dd class="font-medium">{{ career.teamSize }}</dd>
                  </div>
                </dl>

                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="t in career.tech" :key="t" class="tag tag-accent">
                    {{ t }}
                  </span>
                </div>

                <p class="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed">
                  {{ career.summary }}
                </p>

                <div class="mt-5">
                  <p class="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2">
                    成果・取り組み
                  </p>
                  <ul class="space-y-2">
                    <li
                      v-for="(a, i) in career.achievements"
                      :key="i"
                      class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-5 relative"
                    >
                      <span class="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent-500/60" />
                      {{ a }}
                    </li>
                  </ul>
                </div>

                <div v-if="career.others && career.others.length" class="mt-5 p-4 rounded-xl bg-accent-500/5 border border-accent-500/20">
                  <p class="text-xs font-bold tracking-widest text-accent-600 dark:text-accent-300 uppercase mb-2">
                    その他の取り組み
                  </p>
                  <p
                    v-for="(o, i) in career.others"
                    :key="i"
                    class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    {{ o }}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </li>
        </ol>

        <p class="mt-10 pl-12 md:pl-16 text-xs text-slate-500 dark:text-slate-400">
          {{ careerNote }}
        </p>
      </div>
    </div>
  </section>
</template>
