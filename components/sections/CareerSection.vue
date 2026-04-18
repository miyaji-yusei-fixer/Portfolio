<script setup lang="ts">
import { careers, careerNote } from "~/data/career";
</script>

<template>
  <section id="career" class="section relative overflow-hidden">
    <span
      aria-hidden="true"
      class="absolute top-40 left-[-15%] w-[500px] h-[500px] rounded-full opacity-40 blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent 70%);"
    />

    <div class="relative max-w-6xl mx-auto">
      <ScrollReveal>
        <p class="section-subtitle">Career</p>
        <h2 class="section-title">
          <span class="title-underline">
            職務<span class="accent">経歴</span>
          </span>
        </h2>
        <p class="mt-4 text-sm text-slate-500 dark:text-slate-400">
          顧客名は機密保持のため、業界・規模で表記しています。
        </p>
      </ScrollReveal>

      <div class="mt-16 relative">
        <div aria-hidden="true" class="timeline-line" />

        <ol class="space-y-14">
          <li v-for="career in careers" :key="career.id" class="relative">
            <span aria-hidden="true" class="timeline-dot" />

            <ScrollReveal>
              <div class="pl-12 md:pl-16">
                <!-- 期間バッジ -->
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-3">
                  <span class="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-500 to-royal-500" />
                  <p class="text-[11px] font-semibold tracking-[0.2em] text-gradient uppercase">
                    {{ career.period }}
                  </p>
                </div>

                <div class="card p-6 md:p-8">
                  <h3 class="text-2xl md:text-3xl font-bold tracking-tight" style="font-family: 'Playfair Display', 'Noto Serif JP', serif;">
                    {{ career.title }}
                  </h3>
                  <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {{ career.industry }}
                  </p>

                  <dl class="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    <div class="flex items-start gap-3">
                      <dt class="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 w-16 shrink-0 pt-0.5">
                        Role
                      </dt>
                      <dd class="font-semibold">{{ career.role }}</dd>
                    </div>
                    <div class="flex items-start gap-3">
                      <dt class="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 w-16 shrink-0 pt-0.5">
                        Team
                      </dt>
                      <dd class="font-semibold">{{ career.teamSize }}</dd>
                    </div>
                  </dl>

                  <div class="mt-5 flex flex-wrap gap-2">
                    <span v-for="t in career.tech" :key="t" class="tag tag-accent">
                      {{ t }}
                    </span>
                  </div>

                  <p class="mt-6 text-slate-700 dark:text-slate-200 leading-relaxed">
                    {{ career.summary }}
                  </p>

                  <div class="mt-6">
                    <p class="text-[10px] font-bold tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase mb-3">
                      成果・取り組み
                    </p>
                    <ul class="space-y-2.5">
                      <li
                        v-for="(a, i) in career.achievements"
                        :key="i"
                        class="text-sm text-slate-700 dark:text-slate-200 leading-relaxed pl-6 relative"
                      >
                        <span
                          class="absolute left-0 top-[7px] w-3 h-3 rounded-full bg-gradient-to-br from-accent-400 to-royal-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                        />
                        {{ a }}
                      </li>
                    </ul>
                  </div>

                  <div
                    v-if="career.others && career.others.length"
                    class="mt-6 relative p-5 rounded-xl overflow-hidden"
                    style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.06), rgba(139, 92, 246, 0.08)); border: 1px solid rgba(139, 92, 246, 0.25);"
                  >
                    <span aria-hidden="true" class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-royal-400 to-transparent" />
                    <p class="text-[10px] font-bold tracking-[0.25em] text-royal-600 dark:text-royal-300 uppercase mb-2">
                      その他の取り組み
                    </p>
                    <p
                      v-for="(o, i) in career.others"
                      :key="i"
                      class="text-sm text-slate-700 dark:text-slate-200 leading-relaxed"
                    >
                      {{ o }}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </li>
        </ol>

        <p class="mt-12 pl-12 md:pl-16 text-xs text-slate-500 dark:text-slate-400 italic">
          {{ careerNote }}
        </p>
      </div>
    </div>
  </section>
</template>
