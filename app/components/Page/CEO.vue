<script setup lang="ts">
const items = [
  {
    "id": 1,
    "name": "Лилия  Горленко",
    "tag": "Президент Академии психологии и бизнеса",
    "short_description": "Со-основатель Dominique, президент Академии психологии и бизнеса. Бизнес-наставник, эксперт в стратегическом управлении и масштабировании компаний. Более 20 лет управленческого опыта в корпоративном секторе.",
    "photo": "/img/w1.png",
    "link": null,
    "button_text": null,
    "event": 1
  },
  {
    "id": 1,
    "name": "Рита Пиринен",
    "tag": "Бизнес наставник",
    "short_description": "Со-основатель Dominique, предприниматель, бизнес-стратег. Ex-CPO IT-компаний, эксперт в маркетинге и развитии международных продуктов, фаундер AI-проектов. Автор метода «Капитализация личности». Курирует стратегию и международное развитие Dominique.",
    "photo": "/img/w2.png",
    "link": null,
    "button_text": null,
    "event": 1
  }
]
</script>

<template>
<BlockSection extra-class="text-white pt-20 lg:pt-40 !pb-0 mb-20 lg:mb-40" title="Основатели" bg-color="#4D1216">
<template #extra_header>

  <TypingText40 text='

  <div class="flex gap-5">
     <div class="">
   <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.1962 28L9.20682 14L18.1962 0H9.06183L0 14L9.06183 28H18.1962ZM34 28L25.0107 14L34 0H24.8657L15.8038 14L24.8657 28H34Z" fill="#B71D31"/>
  </svg>
</div>
    Dominique — это международное сообщество женщин-лидеров. Мы строим систему, которая объединяет бизнес, культуру и стратегическое развитие, создавая новые стандарты лидерства и влияния
    <div class="">
    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9446 0L21.8763 13L13.9446 26H22.0043L30 13L22.0043 0H13.9446ZM0 0L7.93177 13L0 26H8.0597L16.0554 13L8.0597 0H0Z" fill="#B71D31"/>
    </svg></div>
</div>

'/>

</template>

       <div class="grid grid-cols-1 xl:grid-cols-2 xl:border-t border-[#683539] w-full ">
         <div class="xl:border-r border-[#683539]">
           <CardCEO class="xl:pr-8" :item="items[0]"/>
         </div>
         <div class="">
           <CardCEO :item="items[1]"/>
         </div>


       </div>




</BlockSection>
</template>

<style scoped>

</style>