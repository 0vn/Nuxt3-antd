<template>
  <IconFont :type="type" />
</template>

<script setup lang="ts">
import { createFromIconfontCN } from "@ant-design/icons-vue";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3816955_jl8rxzqekob.js",
});

defineComponent({
  IconFont,
});

defineProps({
  type: {
    type: String,
  },
});
</script>
