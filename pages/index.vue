<template>
  <div>
    <CustomMenu theme="dark" mode="horizontal" :dataSource="dataSource" />
  </div>
</template>

<script setup lang="ts">
const dataSource = [
  { title: "菜单一", icon: "crown-fill" },
  {
    title: "菜单二",
    icon: "crown-fill",
    children: [
      {
        title: "子菜单一",
        icon: "crown-fill",
        children: [{ title: "选项一", icon: "crown-fill" }],
      },
    ],
  },
];
</script>

<style scoped lang="less"></style>
