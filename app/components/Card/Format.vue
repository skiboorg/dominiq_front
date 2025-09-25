<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String as () => 'standart' | 'business'| 'premium',
    default: 'standart'
  },
})

const variantClasses: Record<string, string> = {
  standart: 'bg-[#4D1216] text-white',
  business: 'bg-[#680202] text-white',
  premium: 'bg-[#4D1216] text-white',
}

const items = [
  {active:true,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
  {active:true,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
  {active:true,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
  {active:true,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
  {active:false,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
  {active:false,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
  {active:false,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
  {active:false,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
  {active:false,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
  {active:false,text:'Бесплатный доступ на все мероприятия клуба (offline/online)'},
]
</script>

<template>
  <CardBase  variant="rounded" :extra-class="variantClasses[variant]">
    <TypingText40 extra_class="mb-[30px] uppercase" :text="variant"/>
    <div class="mb-[60px]">
      <div v-for="item in items" :class="item.active? '' : 'text-[#714145]'" class="grid grid-cols-12 gap-4 items-center">
        <div class="col-span-2"><svg width="33" height="4" viewBox="0 0 33 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.5 0V3.328H0.5V0H32.5Z" :fill="item.active? 'white' : '#714145'"/>
        </svg>
        </div>
        <div class="col-span-10">{{item.text}}</div>
      </div>
    </div>

    <TypingText40 extra_class="text-center mb-[60px]" text="15 000₽/ месяц"/>
    <UIButton class="!w-full">Приобрести доступ</UIButton>
  </CardBase>
</template>

<style scoped>

</style>