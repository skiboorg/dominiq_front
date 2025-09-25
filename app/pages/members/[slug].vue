<script setup lang="ts">
definePageMeta({
  layout: 'hero'
})

const items = [
  {image:'/img/pr1.png', title:'Академия Психологии и Бизнеса',
    tags : ['Программы по психологии, бизнесу и в сфере инноваций','Для резидентов клуба скидка 15%'],
    text:'Междисциплинарный подход, работа с реальными кейсами, менторство и супервизии для профессионального роста',
    link:'https://ipb-academy.ru'
  },
  {image:'/img/pr2.png', title:'DOMINIQUE',
    tags : ['Закрытое сообщества'],
    text:'Международное сообщество женщин-лидеров, предпринимательниц и тех, кто хочет выйти на новый уровень влияния, дохода и глубокой реализации.',
    link:'https://thedominique.com/'
  },
]
</script>

<template>
  <BlockHeader/>
  <BlockTop class="mb-20 xl:mb-40">
        <div class="flex flex-col w-full items-start pt-20 xl:pt-32 relative">

          <div class="flex flex-wrap gap-4 mb-10">
            <UIBadge variant="primary" label="г. Москва"/>
            <UIBadge variant="primary" label="Бизнес Консалтинг"/>


          </div>
          <div class="mb-10">
            <TypingText96 extra_class="text-white" text="лилия горленко"/>
          </div>
          <div class="font-onest text-lg leading-[140%] text-white space-y-5 max-w-full lg:max-w-[50%] font-medium mb-24">
            <TypingText24 extra_class="leading-[140%]" text="— Президент Академии психологии и бизнеса<br>
— Ex-управленец крупнейшего нефтехимического холдинга<br>
— Со-основатель Dominique<br>
— MBA по стратегическому менеджменту"/>


          </div>
          <div class="flex flex-col w-full lg:flex-row gap-4">
            <UIButton size="lg">Связь закрыта</UIButton>
            <nuxt-link to="#product">
              <UIButton size="lg" variant="link" >Продукты резидента
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8355 13.5195C12.7894 11.7371 11.6873 6.61674 14.3848 1.65647M14.3848 1.65647L1.65685 14.3844M14.3848 1.65647C9.42451 4.354 4.30412 3.25184 2.52175 2.20579" stroke="white" stroke-width="2" stroke-linejoin="bevel"/>
                </svg>
              </UIButton>
            </nuxt-link>

          </div>
        </div>
    <img class="hidden lg:block w-auto h-[700px] object-contain absolute  lg:bottom-0 right-0 -z-10" src="/img/w11.png" alt="">

  </BlockTop>
  <BlockSection extra-class="pt-0 pb-0">
    <TypingText64
        extra_class="max-w-full lg:max-w-[75%]"
    text="Один в поле не воин, один в поле - <span class=text-primary>хорошая мишень</span>!"
    />
  </BlockSection>
  <BlockSection id="product" extra-class="pt-0" >
    <TypingText64
        extra_class="mb-[60px]"
        text="Продукты резидента"
    />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <CardProduct v-for="item in items" :item="item" />

    </div>
  </BlockSection>
</template>
