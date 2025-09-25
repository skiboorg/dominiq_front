<script setup lang="ts">

const {slug} = useRoute().params
const {$api} = useNuxtApp()

const {data} = await useAsyncData(()=>$api.blank.media_article(slug))
</script>

<template>
    <div class="container">
      <TypingText64 extra_class="uppercase mb-5" :text="data.title"/>
      <div class="flex gap-5 mb-20">
        <UIBadge variant="primary" :label="data.tag1"/>
        <UIBadge variant="primary" :label="data.tag2"/>
      </div>
      <div class="block lg:grid grid-cols-12">

        <div class="col-start-1 col-end-9">
          <TypingText16 extra_class="text-gray-400 mb-5" :text="data.short_description"/>
          <img class="mb-5" :src="data.big_image" alt="">
          <div class="mb-40 html_content" v-html="data.html_content"></div>
        </div>
      </div>
    </div>




</template>

<style lang="sass">
.html_content
  font-weight: 500
  p
    margin-bottom: 20px
  ul
    list-style: disc
    padding-left: 20px
    margin-bottom: 20px
    &
      li
        &::marker
          color: #B71D31
          font-size: 18px
</style>