<script setup lang="ts">
import {Carousel, Pagination, Slide} from "vue3-carousel";
const {$api} = useNuxtApp()

const {data} = await useAsyncData(()=>$api.blank.homebanner())
const carouselConfig = {

  wrapAround: true,
  //autoplay: 3000,
  pauseAutoplayOnHover: true,
  itemsToShow: 1,
  gap:10,
  //slideEffect:'fade'

}
const slider = ref()

</script>

<template>
<div class="relative pb-20 lg:pb-40">
  <div class="absolute top-5 right-5 lg:top-10 lg:right-20 z-20 flex justify-end w-full gap-5">
    <svg class="cursor-pointer" @click="slider.prev()" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="32" fill="white"/>
      <path d="M40 30.75C40.6904 30.75 41.25 31.3096 41.25 32C41.25 32.6904 40.6904 33.25 40 33.25V32V30.75ZM23.1161 32.8839C22.628 32.3957 22.628 31.6043 23.1161 31.1161L31.0711 23.1612C31.5592 22.673 32.3507 22.673 32.8388 23.1612C33.327 23.6493 33.327 24.4408 32.8388 24.9289L25.7678 32L32.8388 39.0711C33.327 39.5592 33.327 40.3507 32.8388 40.8388C32.3507 41.327 31.5592 41.327 31.0711 40.8388L23.1161 32.8839ZM40 32V33.25H24V32V30.75H40V32Z" fill="#680202"/>
    </svg>
    <svg class="cursor-pointer" @click="slider.next()" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="32" fill="white"/>
      <path d="M24 30.75C23.3096 30.75 22.75 31.3096 22.75 32C22.75 32.6904 23.3096 33.25 24 33.25V32V30.75ZM40.8839 32.8839C41.372 32.3957 41.372 31.6043 40.8839 31.1161L32.9289 23.1612C32.4408 22.673 31.6493 22.673 31.1612 23.1612C30.673 23.6493 30.673 24.4408 31.1612 24.9289L38.2322 32L31.1612 39.0711C30.673 39.5592 30.673 40.3507 31.1612 40.8388C31.6493 41.327 32.4408 41.327 32.9289 40.8388L40.8839 32.8839ZM24 32V33.25H40V32V30.75H24V32Z" fill="#680202"/>
    </svg>
  </div>
  <Carousel ref="slider" v-bind="carouselConfig" >
    <Slide v-for="(item,index) in data" :key="index" >
      <div class="flex flex-col items-start justify-end h-[360px] lg:h-[720px] w-full py-5 lg:py-10 px-5 lg:px-20 bg-center lg:bg-center"

           :style="`background-image: url(${item.photo})`" style="background-size: cover">

        <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full">
          <TypingText40 extra_class="text-white uppercase leading-[120%] lg:max-w-[50%]"  :text="item.description"/>
          <div class="text-[14px] lg:text-[48px] text-white tracking-[-0.04rem]">0{{index+1}} / 0{{data.length}}</div>
        </div>
      </div>
    </Slide>
  </Carousel>
  </div>
</template>
