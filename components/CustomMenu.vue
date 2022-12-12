<template>
  <a-menu :mode="mode" :theme="theme">
    <template v-for="(item, index) in dataSource">
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
  </a-menu>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

interface DataSourceObj {
  title: string;
  icon: string;
  children?: any[];
}
defineProps({
  // 模式
  mode: {
    type: String,
    default: "horizontal",
  },

  // 主题
  theme: {
    type: String,
    default: "dark",
  },

  // 数据源
  dataSource: {
    type: Array as PropType<DataSourceObj[]>,
    default: () => []
  },
});
</script>

<style scoped lang="less"></style>
