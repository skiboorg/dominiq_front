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
  <h3 class="text-[32px] leading-[100%]  tracking-[-0.04rem]"
      :class="props.extra_class"
      v-html="props.text"></h3>
</template>

<style scoped>

</style>