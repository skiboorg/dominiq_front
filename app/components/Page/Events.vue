<script setup lang="ts">
const {$api} = useNuxtApp()

const {data} = await useAsyncData(()=>$api.blank.events())

</script>

<template>
<BlockSection >
<BlockSmallHeader>
  НАШИ МЕРОПРИЯТИЯ
</BlockSmallHeader>

        <BlockListItem v-for="(item,index) in data" :item="item"  :index="index" bordered with_link variant="numbered"/>




</BlockSection>
</template>

<style scoped>

</style>