<script setup lang="ts">
const props = defineProps({
  text: {
    type: String ,
    default: '',
  },
  extra_class: {
    type: String ,
    default: '',
  }
})
</script>

<template>
  <p class="text-[16px] leading-[150%] tracking-[-0.04rem]"
      :class="props.extra_class"
      v-html="props.text"></p>
</template>

<style scoped>

</style>