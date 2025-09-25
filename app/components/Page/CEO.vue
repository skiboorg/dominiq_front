<script setup lang="ts">
const items = [
  {
    "id": 1,
    "name": "Имя Имя",
    "tag": "Тэг",
    "short_description": "Короткое описаниеКороткое описаниеКороткое описаниеКороткое описаниеКороткое описание Короткое описаниеКороткое описаниеКороткое описаниеКороткое описаниеКороткое описаниеКороткое описание",
    "photo": "http://127.0.0.1:8000/media/events/hosts/t.png",
    "link": null,
    "button_text": null,
    "event": 1
  },
  {
    "id": 1,
    "name": "Имя Имя",
    "tag": "Тэг",
    "short_description": "Короткое описаниеКороткое описаниеКороткое описаниеКороткое описаниеКороткое описание Короткое описаниеКороткое описаниеКороткое описаниеКороткое описаниеКороткое описаниеКороткое описание",
    "photo": "http://127.0.0.1:8000/media/events/hosts/t.png",
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
    Соединяем науку, бизнес и личность, формируем лидеров экономики будущего формируем лидеров будущего
    формируем лидеров экономики будущего
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