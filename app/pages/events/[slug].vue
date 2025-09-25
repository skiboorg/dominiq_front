<script setup lang="ts">
definePageMeta({
  layout: 'hero'
})

import {useRoute} from "vue-router";

const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data} = await useAsyncData(()=>$api.blank.event(slug))
</script>

<template>
  <BlockHeader/>
  <BlockTop :bg_image="data.background_image" >
    <div class="flex flex-col w-full h-full items-start justify-between py-20 lg:py-32 xl:py-40 relative">

      <div class="flex gap-4 mb-10">
        <UIBadge variant="primary" :label="data.date_text"/>
        <UIBadge variant="primary" :label="data.price_text"/>
        <UIBadge variant="primary" :label="data.seats_text"/>
      </div>
      <div class="mb-10">
        <TypingText96 extra_class="text-white" :text="data.title"/>
      </div>

        <TypingText24 extra_class="text-normal mb-24 font-onest text-white max-w-[70%]"
                      :text="data.short_description"/>

      <div class="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
        <UIButton size="lg">Забронировать</UIButton>
        <nuxt-link to="/events">
          <UIButton size="lg" variant="link" >Другие мероприятия
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8355 13.5195C12.7894 11.7371 11.6873 6.61674 14.3848 1.65647M14.3848 1.65647L1.65685 14.3844M14.3848 1.65647C9.42451 4.354 4.30412 3.25184 2.52175 2.20579" stroke="white" stroke-width="2" stroke-linejoin="bevel"/>
            </svg>
          </UIButton>
        </nuxt-link>

      </div>
    </div>


  </BlockTop>
  <BlockSection title="Для кого" extra-class="pb-0 pt-20 lg:pt-40">
    <TypingText18 extra_class="text-gray-400 max-w-full lg:max-w-[40%] mb-[30px] lg:mb-[60px]"
                  :text="data.for_whom_text"/>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <CardBase variant="rounded" v-for="(item,index) in data.for_whom_blocks">
       <TypingText96 :text="`0${index+1}`" extra_class="mb-10 text-primary"/>
        <TypingText22 extra_class="mb-5" :text="item.title"/>
        <TypingText16 extra_class="text-gray-400" :text="item.description"/>
      </CardBase>
    </div>
  </BlockSection>
  <BlockSection title="Программа мероприятия" extra-class="pb-0">
    <TypingText18 extra_class="max-w-full lg:max-w-[40%] mb-[30px] lg:mb-[60px] text-gray-400"
                  :text="data.program_text"/>

    <BlockListItem v-for="(item,index) in data.program_items"
                   :vip="item.is_vip"
                   :index="index" :item="item" outline variant="numbered"/>

  </BlockSection>
  <BlockSection extra-class="pt-0 pb-0">
    <TypingText64
        extra_class="max-w-full lg:max-w-[75%]"
        :text="data.big_text"
    />
  </BlockSection>
  <BlockSection title="Ведущие программы" >
    <TypingText18 extra_class="max-w-full lg:max-w-[40%] mb-[60px] text-gray-400"
                  text="Международное сообщество женщин-лидеров, предпринимательниц и тех, кто хочет выйти на новый уровень влияния, дохода и глубокой реализации."/>
    <div class="grid grid-cols-1 lg:grid-cols-2  w-full gap-5">
        <CardBase variant="filled" v-for="item in data.hosts">
          <CardCEO :item="item"/>
        </CardBase>

    </div>
  </BlockSection>
</template>

<style scoped>

</style>