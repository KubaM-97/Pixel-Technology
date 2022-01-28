<template>
  <img src="../assets/images/loader2.gif" alt="loader" />
</template>

<script>
export default {
  name: "Loader",
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
img {
  width: 50%;
}
</style>