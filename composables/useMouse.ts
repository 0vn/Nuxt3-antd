export default () => {
  const x = ref(0);
  const y = ref(0);

  const update = (event: { pageX: number; pageY: number }) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
};
