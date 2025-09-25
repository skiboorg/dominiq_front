<script setup lang="ts">


const {$api} = useNuxtApp()

const {data} = await useAsyncData(()=>$api.blank.media_articles())
</script>

<template>
 <BlockSection title="Медиа">
   <div class="grid grid-cols-1 lg:grid-cols-4 gap-5">

       <CardMedia v-for="(item,index) in data" :key="index" :index="index" :item="item"/>

   </div>
 </BlockSection>
</template>

<style scoped>

</style>