<script setup lang="ts">
defineProps(['item'])
</script>
<!--{image:'/img/pr1.png', title:'Академия Психологии и Бизнеса',-->
<!--tags : ['Программы по психологии, бизнесу и в сфере инноваций','Для резидентов клуба скидка 15%'],-->
<!--text:'Междисциплинарный подход, работа с реальными кейсами, менторство и супервизии для профессионального роста',-->
<!--link:'https://ipb-academy.ru'-->
<!--},-->
<template>
<CardBase variant="rounded">
  <img class="w-full h-auto lg:h-[400px] object-cover  mb-6" :src="item.image" alt="">
  <TypingText40 extra_class="text-primary mb-6 font-medium" :text="item.title"/>
  <div class="flex flex-wrap gap-3 mb-8">
    <UIBadge v-for="i in item.tags" variant="contrast" :label="i"/>

  </div>
  <TypingText16 extra_class="max-w-[80%] mb-9 font-normal" :text="item.text"/>
  <a :href="item.link" target="_blank">
    <UIButton variant="outlineDark">Перейти к продукту
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="12" fill="white"/>
        <path d="M8.63764 14.2997C8.34475 14.5926 8.34475 15.0675 8.63764 15.3604C8.93053 15.6533 9.40541 15.6533 9.6983 15.3604L9.16797 14.8301L8.63764 14.2997ZM15.5748 9.17322C15.5748 8.75901 15.239 8.42322 14.8248 8.42322L8.07482 8.42322C7.66061 8.42322 7.32482 8.75901 7.32482 9.17322C7.32482 9.58744 7.66061 9.92322 8.07482 9.92322H14.0748V15.9232C14.0748 16.3374 14.4106 16.6732 14.8248 16.6732C15.239 16.6732 15.5748 16.3374 15.5748 15.9232L15.5748 9.17322ZM9.16797 14.8301L9.6983 15.3604L15.3552 9.70355L14.8248 9.17322L14.2945 8.64289L8.63764 14.2997L9.16797 14.8301Z" fill="#141725"/>
      </svg>
    </UIButton>
  </a>

</CardBase>
</template>

<style scoped>

</style>