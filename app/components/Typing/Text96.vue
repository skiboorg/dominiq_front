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
  <h3 class="text-[40px] xl:text-[96px]  leading-[100%] uppercase tracking-[-0.02rem]"
      :class="props.extra_class"
      v-html="props.text"></h3>
</template>

<style scoped>

</style>