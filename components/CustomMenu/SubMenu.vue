<template>
  <div>
    <a-sub-menu :key="menuInfo.value">
      <template #icon><IconFont v-if="menuInfo.icon" :type="menuInfo.icon" /></template>
      <template #title>{{menuInfo.title}}</template>
      <template v-for="item in menuInfo.children">
        <template v-if="!item.children || item.children.length === 0">
          <a-menu-item :key="item.value">
            <template #icon><IconFont v-if="item.icon" :type="item.icon" /></template>
            {{item.title}}
          </a-menu-item>
        </template>
        <template v-else>
          <CustomMenuSubMenu :menuInfo="item" :key="item.value" />
        </template>
      </template>
    </a-sub-menu>
  </div>
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
