<template>
  <a-menu v-bind="$attrs">
    <template v-for="item in dataSource" :key="item.value">
      <template v-if="!item.children">
        <a-menu-item :key="item.value">
          <template #icon><IconFont v-if="item.icon" :type="item.icon" /></template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <CustomMenuSubMenu :menuInfo="item" :key="item.value" />
      </template>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { PropType } from "vue";

interface DataSourceObj {
  title: string; // 设置收缩时展示的悬浮标题
  value: string; // item 的唯一标志
  icon: string; // 菜单图标
  children?: any[]; // 子菜单
}

defineProps({
  // 数据源
  dataSource: {
    type: Array as PropType<DataSourceObj[]>,
    default: () => [],
  },
});
</script>

<style scoped lang="less"></style>
