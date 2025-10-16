<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object
  },
})
</script>

<template>
<div class="grid grid-cols-1 xl:grid-cols-2   relative h-full">
  <div class="py-4 pl-4 order-1 xl:order-0">
    <TypingText40 extra_class="max-w-full  mb-3" :text="item?.name"/>
    <UIBadge variant="contrast" class="mb-8" :label="item?.tag"/>
    <TypingText16 extra_class="text-[#CE9CA0] " :text="item?.short_description"/>

<!--    <nuxt-link to="/">-->
<!--      <UIButton variant="outline">Изучить биографию <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--        <path d="M0.465275 7.93647C0.172382 8.22936 0.172382 8.70423 0.465275 8.99713C0.758169 9.29002 1.23304 9.29002 1.52594 8.99713L0.995605 8.4668L0.465275 7.93647ZM8.74561 1.4668C8.74561 1.05258 8.40982 0.716796 7.99561 0.716797L1.24561 0.716796C0.831392 0.716796 0.495605 1.05258 0.495605 1.4668C0.495605 1.88101 0.831392 2.2168 1.24561 2.2168L7.24561 2.2168L7.24561 8.2168C7.24561 8.63101 7.58139 8.9668 7.99561 8.9668C8.40982 8.9668 8.74561 8.63101 8.74561 8.2168L8.74561 1.4668ZM0.995605 8.4668L1.52594 8.99713L8.52594 1.99713L7.99561 1.4668L7.46528 0.936466L0.465275 7.93647L0.995605 8.4668Z" fill="white"/>-->
<!--      </svg>-->
<!--      </UIButton>-->
<!--    </nuxt-link>-->
  </div>
  <div class="order-0 xl:order-1 content-end">
    <img  :src="item?.photo" alt="">
  </div>
</div>
</template>

<style scoped>

</style>