<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String as () => 'standart' | 'business'| 'premium',
    default: 'standart'
  },
  tariff: {}
})

const variantClasses: Record<string, string> = {
  standart: 'bg-[#4D1216] text-white',
  business: 'bg-[#680202] text-white',
  premium: 'bg-[#4D1216] text-white',
}

</script>

<template>
  <CardBase  variant="rounded" :extra-class="variantClasses[variant]">
    <TypingText40 extra_class="mb-[30px] uppercase" :text="variant"/>

    <div class="mb-[60px]" v-html="tariff.description">

    </div>

    <TypingText40 extra_class="text-center mb-[60px]" :text="tariff.price_text"/>
    <a :href="tariff.btn_url" target="_blank">  <UIButton class="!w-full">Приобрести доступ</UIButton></a>

  </CardBase>
</template>

<style scoped>

</style>