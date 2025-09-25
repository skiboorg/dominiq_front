<script setup lang="ts">
const props = defineProps({
  bgColor: {
    type: String ,
    default: '#fff',
  },
  extraClass: {
    type: String ,
    default: '',
  },
  title: {
    type: String ,
    default: '',
  },
  show_button: {
    type: Boolean ,
    default: false,
  },


})
</script>

<template>
<section class="pb-20 lg:pb-32 xl:pb-40" :class="[props.extraClass]" :style="`background-color: ${props.bgColor}`">
  <div class="container ">
    <div v-if="title" class="grid grid-cols-1 lg:grid-cols-2 mb-10 lg:mb-20 gap-10 lg:gap-0">
      <div class="flex flex-col items-start justify-between">
        <TypingText64 extra_class="uppercase" :text="title"/>
        <NuxtLink v-if="show_button" to="/">
          <UIButton variant="primary">Все мероприятия
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="white"/>
              <path d="M8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75V12V11.25ZM16.5303 12.5303C16.8232 12.2374 16.8232 11.7626 16.5303 11.4697L11.7574 6.6967C11.4645 6.40381 10.9896 6.40381 10.6967 6.6967C10.4038 6.98959 10.4038 7.46447 10.6967 7.75736L14.9393 12L10.6967 16.2426C10.4038 16.5355 10.4038 17.0104 10.6967 17.3033C10.9896 17.5962 11.4645 17.5962 11.7574 17.3033L16.5303 12.5303ZM8 12V12.75H16V12V11.25H8V12Z" fill="#680202"/>
            </svg>
          </UIButton>
        </NuxtLink>

      </div>
      <div v-if="$slots.extra_header" class=""><slot name="extra_header"></slot></div>
    </div>
    <slot></slot>
  </div>
</section>
</template>

<style scoped>

</style>