<script setup lang="ts">

const items = [
  {image:'/img/i1.png',title:'Продукт',description:'Мы сопровождаем создание и масштабирование ваших проектов, обеспечивая доступ к экспертизе и бизнес-инструментам.'},
  {image:'/img/i2.png',title:'Окружение',description:'Вы входите в глобальную сеть предпринимателей и консультантов, формирующих новые стандарты лидерства и влияния.'},
  {image:'/img/i3.png',title:'Медиа',description:'Ваши исследования, идеи и практики становятся частью международного медиаполя, что укрепляет ваш личный бренд и расширяет влияние.'},

]
</script>

<template>
<BlockSection extra-class="pt-20 xl:pt-40" title="Экосистема">
<template #extra_header>
  <TypingText24 extra_class="text-gray-400" text="Резидентство = стратегический ресурс для развития"/>

</template>
  <div class="block lg:grid grid-cols-1 lg:grid-cols-12 gap-12 border-t pt-10 lg:pt-20">
    <div class="col-span-12 lg:col-span-6 lg:border-r">
        <BlockListItem v-for="item in items" :item="item"/>
    </div>
    <div class="col-span-12 lg:col-span-6 lg:pl-20">
      <div class="grid grid-cols-2">
        <div class="">
          <p class="text-[36px] lg:text-[72px] font-medium">$168M</p>
          <TypingText16 text="Совокупная выручка<br>резидентов" extra_class="font-regular text-gray-400 mb-[30px] lg:mb-[60px] ]" />
        </div>
        <div class="">
          <p class="text-[36px] lg:text-[72px] font-medium">13</p>
          <TypingText16 text="Представительств в ключевых<br>странах и городах мира" extra_class="font-regular text-gray-400  mb-[30px] lg:mb-[60px]" />
        </div>
        <div class=" ">
          <p class="text-[36px] lg:text-[72px] font-medium">100+</p>
          <TypingText16 text="Резидентов<br>и экспертов в сети" extra_class="font-regular text-gray-400  lg:mb-[60px]" />
        </div>
        <div class="">
          <p class="text-[36px] lg:text-[72px] font-medium">100+</p>
          <TypingText16 text="Стратегических<br>партнеров" extra_class="font-regular text-gray-400  lg:mb-[60px]" />
        </div>
      </div>
    </div>
  </div>

</BlockSection>
</template>

<style scoped>

</style>