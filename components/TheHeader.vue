<script setup lang="ts">
const colorMode = useColorMode();

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Career", href: "#career" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const mobileOpen = ref(false);
const handleNavClick = () => {
  mobileOpen.value = false;
};

const scrolled = ref(false);
onMounted(() => {
  const handler = () => (scrolled.value = window.scrollY > 8);
  handler();
  window.addEventListener("scroll", handler, { passive: true });
  onBeforeUnmount(() => window.removeEventListener("scroll", handler));
});
</script>

<template>
  <header
    class="sticky top-0 z-40 transition-all duration-500"
    :class="[
      scrolled
        ? 'backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/60 shadow-[0_2px_20px_-10px_rgba(15,23,42,0.15)] dark:shadow-[0_2px_20px_-10px_rgba(0,0,0,0.6)]'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="group flex items-center gap-2 font-bold tracking-tight text-lg" style="font-family: 'Playfair Display', serif;">
        <span class="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-royal text-white text-sm shadow-glow-sm group-hover:shadow-glow transition-shadow">
          Y
          <span class="absolute -inset-1 rounded-lg bg-gradient-royal opacity-40 blur-md -z-10" />
        </span>
        <span class="text-gradient">Miyaji</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
        >
          {{ item.label }}
          <span class="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full rounded-full bg-gradient-royal transition-all duration-300" />
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition"
          :aria-label="colorMode.value === 'dark' ? 'ライトモードに切替' : 'ダークモードに切替'"
          @click="toggleTheme"
        >
          <ClientOnly>
            <svg
              v-if="colorMode.value === 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <template #fallback>
              <span class="inline-block w-[18px] h-[18px]" />
            </template>
          </ClientOnly>
        </button>

        <button
          type="button"
          class="md:hidden p-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition"
          aria-label="メニュー"
          @click="mobileOpen = !mobileOpen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="!mobileOpen" d="M3 6h18M3 12h18M3 18h18" />
            <path v-else d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="mobileOpen"
        class="md:hidden border-t border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xl bg-white/85 dark:bg-slate-950/85"
      >
        <div class="px-6 py-4 flex flex-col gap-3">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="py-2 text-base font-medium hover:text-accent-500 transition-colors"
            @click="handleNavClick"
          >
            {{ item.label }}
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
