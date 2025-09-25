<script setup lang="ts">

</script>

<template>
  <BlockTop>
        <div class="flex flex-col w-full items-start pt-32 relative">

          <div class="flex gap-4 mb-10">
            <UIButton variant="filled">Москва</UIButton>
            <UIButton variant="filled">Москва</UIButton>
            <UIButton variant="filled">Москва</UIButton>
          </div>
          <div class="mb-10">
            <TypingText96 extra_class="text-white" text="Анна франкова"/>
          </div>
          <div class="font-onest text-lg leading-[140%] text-white space-y-5 max-w-[45%] font-medium mb-24">
            <TypingText24 text="— выпускница академии Психологии 2024 года"/>
            <TypingText24 text="— выпускница академии Психологии 2024 года"/>
            <TypingText24 text="— выпускница академии Психологии 2024 года"/>

          </div>
          <div class="flex gap-4">
            <UIButton size="lg">Связь закрыта</UIButton>

            <UIButton size="lg" variant="link" >Продукты резидента
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8355 13.5195C12.7894 11.7371 11.6873 6.61674 14.3848 1.65647M14.3848 1.65647L1.65685 14.3844M14.3848 1.65647C9.42451 4.354 4.30412 3.25184 2.52175 2.20579" stroke="white" stroke-width="2" stroke-linejoin="bevel"/>
              </svg>
            </UIButton>
          </div>
        </div>
    <img class="w-auto h-[700px] object-contain absolute bottom-0 right-0 -z-10" src="https://placehold.co/600x700.png" alt="">

  </BlockTop>
  <BlockSection extra-class="pt-0 pb-0">
    <TypingText64
        extra_class="max-w-[75%]"
    text="Я не одинок, я одиночка. Я не качок, я кочка! Джейсон Стэтхэм самый красивый мужчина и точка. Вкусно и точка."
    />
  </BlockSection>
  <BlockSection extra-class="pt-0" >
    <TypingText64
        extra_class="text-primary mb-[60px]"
        text="Продукты резидента"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardProduct/>
      <CardProduct/>
    </div>
  </BlockSection>
</template>
