<script setup lang="ts">
// 履歴書・職務経歴書ページは公開しない。
// routeRules で /resume → / にリダイレクト (nuxt.config.ts 参照)。
definePageMeta({
  layout: false,
});
</script>

<template>
  <div />
</template>
