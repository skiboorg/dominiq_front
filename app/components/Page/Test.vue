<script setup lang="ts">

</script>

<template>
<BlockSection title="Тестовый период" >
<template #extra_header>
  <div class="flex justify-end">
    <UIButton variant="primary">Бесплатно на 14 дней</UIButton>
  </div>


</template>

       <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">

       <CardBase extra-class="col-span-12 lg:col-span-7  order-1 xl:order-0" variant="rounded">
         <TypingText32 extra_class="mb-10" text="Мы предоставляем возможность попробовать наши прелести в течении 14 дней бесплатно"/>
         <BlockListItem/>
         <BlockListItem/>
         <BlockListItem/>
         <UIButton variant="primary" class="w-full" >Попробовать возможности клуба
           <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0.46967 9.82904C0.176777 10.1219 0.176777 10.5968 0.46967 10.8897C0.762563 11.1826 1.23744 11.1826 1.53033 10.8897L1 10.3594L0.46967 9.82904ZM10.75 1.35938C10.75 0.945161 10.4142 0.609375 10 0.609375L3.25 0.609374C2.83579 0.609374 2.5 0.945161 2.5 1.35937C2.5 1.77359 2.83579 2.10937 3.25 2.10937L9.25 2.10938L9.25 8.10937C9.25 8.52359 9.58579 8.85938 10 8.85938C10.4142 8.85938 10.75 8.52359 10.75 8.10937L10.75 1.35938ZM1 10.3594L1.53033 10.8897L10.5303 1.88971L10 1.35937L9.46967 0.829045L0.46967 9.82904L1 10.3594Z" fill="white"/>
           </svg>
         </UIButton>
       </CardBase>
         <div class="col-span-12 lg:col-span-5 order-0 xl:order-1">
           <img class="rounded-3xl w-full h-auto object-cover" src="https://placehold.co/700x700.png" alt="">
         </div>
       </div>




</BlockSection>
</template>

<style scoped>

</style>