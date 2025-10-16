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
    <div class="flex flex-col items-start justify-between h-full">
    <TypingText40 extra_class="mb-[30px] uppercase" :text="variant"/>

    <div class="mb-[60px] html-content" v-html="tariff.description"></div>
    <div class="w-full">
      <TypingText40 extra_class="mb-10" :text="tariff.price_text"/>
      <a :href="tariff.btn_url" target="_blank" >  <UIButton class="!w-full">Приобрести доступ</UIButton></a>
    </div>
    </div>

  </CardBase>
</template>

<style lang="sass">
.html-content
  ul
    list-style: disc
    padding-left: 20px
    margin-bottom: 20px
    &
      li
        font-size: 16px
        &::marker
          color: white
          font-size: 18px
</style>