<script setup lang="ts">
// IntersectionObserverでビューポートに入ったら fade-in-up を付与する軽量Reveal
const el = ref<HTMLElement | null>(null);
const revealed = ref(false);

onMounted(() => {
  if (!el.value || typeof IntersectionObserver === "undefined") {
    revealed.value = true;
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealed.value = true;
          io.disconnect();
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  io.observe(el.value);
  onBeforeUnmount(() => io.disconnect());
});
</script>

<template>
  <div
    ref="el"
    class="transition-all duration-700 ease-out"
    :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
  >
    <slot />
  </div>
</template>
