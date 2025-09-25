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
  <h3 class="text-[32px] lg:text-[48px] xl:text-[64px] font-medium leading-[105%]  tracking-[-0.04rem]"
      :class="props.extra_class"
      v-html="props.text"></h3>
</template>

<style scoped>

</style>