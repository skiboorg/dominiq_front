<script setup lang="ts">

import {Carousel, Pagination, Slide} from "vue3-carousel";
const carouselConfig = {

  wrapAround: true,
  //autoplay: 3000,
  pauseAutoplayOnHover: true,
  gap:16,
  //slideEffect:'fade'
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // 400px and up
    630: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    900: {
      itemsToShow: 4,
      snapAlign: 'start',
    },
  }
}
const slider = ref()
const {$api} = useNuxtApp()

const {data} = await useAsyncData(()=>$api.blank.media_articles())

</script>

<template>
<BlockSection title="Медиа"  >
<template #extra_header>
 <div class="flex flex-col md:flex-row items-start md:items-center justify-end gap-4">
   <nuxt-link class="w-full md:w-auto" to="/media">
     <UIButton variant="primary" >
       Посмотреть все
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="24" height="24" rx="12" fill="white"/>
         <path d="M8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75V12V11.25ZM16.5303 12.5303C16.8232 12.2374 16.8232 11.7626 16.5303 11.4697L11.7574 6.6967C11.4645 6.40381 10.9896 6.40381 10.6967 6.6967C10.4038 6.98959 10.4038 7.46447 10.6967 7.75736L14.9393 12L10.6967 16.2426C10.4038 16.5355 10.4038 17.0104 10.6967 17.3033C10.9896 17.5962 11.4645 17.5962 11.7574 17.3033L16.5303 12.5303ZM8 12V12.75H16V12V11.25H8V12Z" fill="#680202"/>
       </svg>
     </UIButton>
   </nuxt-link>
    <div class="flex gap-4 w-full md:w-auto">
      <UIButton variant="primary" @click="slider.prev()">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8.75C18.6904 8.75 19.25 9.30964 19.25 10C19.25 10.6904 18.6904 11.25 18 11.25V10V8.75ZM1.11612 10.8839C0.627962 10.3957 0.627962 9.60427 1.11612 9.11612L9.07107 1.16117C9.55922 0.67301 10.3507 0.67301 10.8388 1.16117C11.327 1.64932 11.327 2.44078 10.8388 2.92893L3.76777 10L10.8388 17.0711C11.327 17.5592 11.327 18.3507 10.8388 18.8388C10.3507 19.327 9.55922 19.327 9.07107 18.8388L1.11612 10.8839ZM18 10V11.25H2V10V8.75H18V10Z" fill="white"/>
        </svg>

      </UIButton>
      <UIButton variant="primary" @click="slider.next()">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8.75C1.30964 8.75 0.75 9.30964 0.75 10C0.75 10.6904 1.30964 11.25 2 11.25V10V8.75ZM18.8839 10.8839C19.372 10.3957 19.372 9.60427 18.8839 9.11612L10.9289 1.16117C10.4408 0.67301 9.64932 0.67301 9.16117 1.16117C8.67301 1.64932 8.67301 2.44078 9.16117 2.92893L16.2322 10L9.16117 17.0711C8.67301 17.5592 8.67301 18.3507 9.16117 18.8388C9.64932 19.327 10.4408 19.327 10.9289 18.8388L18.8839 10.8839ZM2 10V11.25H18V10V8.75H2V10Z" fill="white"/>
        </svg>
      </UIButton>
    </div>

 </div>

</template>
  <Carousel ref="slider" v-bind="carouselConfig" >
    <Slide v-for="(item,index) in data" :key="index" >
        <CardMedia  :index="index" :item="item"/>
    </Slide>
  </Carousel>




</BlockSection>
</template>

<style scoped>

</style>