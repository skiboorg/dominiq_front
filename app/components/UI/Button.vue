<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String as () => 'default' | 'primary' | 'contrast' | 'filled' | 'outline' | 'link' | 'outlineDark',
    default: 'default'
  },
  size: {
    type: String as () => 'sm' | 'lg',
    default: 'sm'
  },


})

const variantClasses: Record<string, string> = {
  default: 'bg-white text-black border border-transparent ',
  primary: 'bg-[#680202] text-white border border-transparent',
  contrast: 'bg-[#F1F1F1] text-[#2C2C2C] border border-transparent',
  filled: 'bg-[#7B0000] text-white',
  outline: 'bg-transparent text-white border',
  outlineDark: 'bg-transparent text-black border font-normal',
  link: 'bg-transparent text-white border border-transparent',
}

const sizeClasses: Record<string, string> = {
  sm: 'py-3 px-6  text-[16px]',
  lg: 'py-[18px] xl:py-[22px] px-8 xl:px-10 text-[20px] ',
}

</script>

<template>
<button class="font-onest rounded-[12px] flex w-full md:w-auto items-center justify-center gap-3"
        :class="[variantClasses[props.variant], sizeClasses[props.size]]">
  <slot></slot>
</button>
</template>

<style scoped>

</style>