<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String as () => 'default' | 'rounded'| 'filled' ,
    default: 'default'
  },
  padding: {
    type: String as () => 'xs' |'sm' | 'lg',
    default: 'sm'
  },
  extraClass: {
    type: String,
    default: ''
  },


})

const variantClasses: Record<string, string> = {
  default: 'border border-[#E3E3E3]',
  rounded: 'border border-[#E3E3E3] rounded-[24px]',
  filled: 'rounded-[32px] bg-gradient-to-b from-[#673236] to-[#4D1216] !pb-0 px-8 pt-8 text-white',
}
const paddingClasses: Record<string, string> = {
  xs: 'p-5 lg:p-7',
  sm: 'p-5 lg:p-10',
  lg: 'p-[50px]',
}

</script>

<template>
<div class="" :class="[variantClasses[variant], paddingClasses[padding],extraClass]">
<slot/>
</div>
</template>

<style scoped>

</style>