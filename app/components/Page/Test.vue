<script setup lang="ts">
const items = [
    'Участие в онлайн- и офлайн-мероприятиях ближайших недель',
    'Знакомство с резидентами — предпринимателями, лидерами и экспертами разных отраслей',
    'Доступ к закрытым материалам и контенту сообщества',
    'Первые шаги к расширению вашего круга общения и росту возможностей',
]
</script>

<template>
<BlockSection title="Тестовый период" >

        <CardBase variant="rounded">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

            <div class="order-1 xl:order-0 flex flex-col items-start justify-between gap-5 lg:gap-0" >
            <TypingText32  text="Мы открываем доступ к сообществу Dominique на 14 дней бесплатно,
            чтобы вы смогли прочувствовать атмосферу, ценность и масштаб изнутри."/>
              <div class="space-y-5">
              <p class="flex items-center gap-3 text-[#9D9D9C] " v-for="item in items">
                <span class="">
                   <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="24" height="24" rx="12" fill="#B71D31"/>
                <path d="M16 10L10.5 15.5L8 13" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                </span>

               {{item}}
              </p>
            </div>
              <UIButton class="!w-full" variant="primary">Попробовать</UIButton>
            </div>
            <div class="order-0 xl:order-1">
              <img class="rounded-3xl w-full h-auto object-cover" src="/t2.png" alt="">
            </div>
          </div>
        </CardBase>





</BlockSection>
</template>

<style scoped>

</style>