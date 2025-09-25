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
  filled: 'bg-[#4B302F] text-white',
  outline: 'bg-transparent text-white border',
  outlineDark: 'bg-transparent text-black border font-normal',
  link: 'bg-transparent text-white border border-transparent',
}

const sizeClasses: Record<string, string> = {
  sm: 'py-4 px-8 font-bold',
  lg: 'py-5 xl:py-7 px-8 xl:px-10 text-[20px] font-semibold',
}

</script>

<template>
<button class="font-onest rounded-[124px] flex w-full md:w-auto items-center justify-center gap-3"
        :class="[variantClasses[props.variant], sizeClasses[props.size]]">
  <slot></slot>
</button>
</template>

<style scoped>

</style>