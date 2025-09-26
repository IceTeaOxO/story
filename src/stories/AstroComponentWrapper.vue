<template>
  <div class="astro-component-wrapper">
    <!-- 渲染 Astro 組件的輸出 -->
    <div v-html="renderedComponent"></div>
  </div>
</template>

<script>
export default {
  props: {
    // 定義需要的屬性
  },
  computed: {
    renderedComponent() {
      // 這裡您需要以某種方式獲取 Astro 組件的渲染輸出
      // 這可能需要一些自定義邏輯或構建時預渲染
      return `<div>Astro 組件的輸出</div>`;
    }
  }
}
</script>

