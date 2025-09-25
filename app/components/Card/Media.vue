<script setup lang="ts">
const props = defineProps({
    index: {
      type: Number,
    },
    item: {
      type: Object
    }
  })
</script>

<template>
<nuxt-link :to="`/media/${item.slug}`">
  <TypingText24 extra_class="text-gray-400 mb-9" :text="`( 0${props?.index + 1} )`"/>
    <img class="w-[400px] h-[400px] object-cover rounded-3xl mb-9" :src="item?.cover" alt="">
  <TypingText32 extra_class="uppercase mb-3" :text="item?.title"/>
  <TypingText18 extra_class="text-gray-400" :text="item?.short_description"/>

</nuxt-link>
</template>

<style scoped>

</style>