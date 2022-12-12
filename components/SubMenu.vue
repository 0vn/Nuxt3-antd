<template>
  <a-sub-menu :key="menuInfo.key">
    <template #icon><IconFont v-if="menuInfo.icon" :type="menuInfo.icon" /></template>
    <template #title>{{menuInfo.title}}</template>
    <template v-for="(item,index) in menuInfo.children">
      <template v-if="!item.children">
        <a-menu-item :key="index">
          <template #icon><IconFont v-if="item.icon" :type="item.icon" /></template>
          {{item.title}}
        </a-menu-item>
      </template>
      <template v-else>
        <SubMenu :menuInfo="item" :key="index" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script setup lang="ts">
defineProps({
  menuInfo: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped lang="less"></style>
