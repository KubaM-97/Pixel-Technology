<template>
  <img src="../assets/images/loader.gif" alt="loader" />
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

<style>
img {
  width: 100%;
}
</style>