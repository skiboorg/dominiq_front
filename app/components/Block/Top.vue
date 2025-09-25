<script setup lang="ts">
const props = defineProps({
  bg_image: {
    type: String ,
    default: '/img/index_top_bg.jpg',
  },
  bg_color: {
    type: String ,
    default: '#29070780',
  },
  h: {
    type: String ,
    default: '900px',
  }
})
</script>

<template>
  <section  :style="[`background-image: url(${props.bg_image})`,
 `background-color:${props.bg_color}`,`height: ${props.h}`]"
            class="pt-20 lg:pt-32 xl:pt-40 relative z-10 ">
    <div class="container h-full">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>

</style>