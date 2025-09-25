<script setup lang="ts">

</script>

<template>
<BlockSection title="Формат участия" >
<template #extra_header>
  <TypingText24 extra_class="text-gray-400 mb-5" text="1 месяц в подарок при оплате 6 месяцев"/>
  <TypingText24 extra_class="text-gray-400" text="2 месяца в подарок при оплате 12 месяцев"/>

</template>

       <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <CardFormat variant="standart"></CardFormat>
        <CardFormat variant="business"></CardFormat>
        <CardFormat variant="premium"></CardFormat>
       </div>




</BlockSection>
</template>

<style scoped>

</style>