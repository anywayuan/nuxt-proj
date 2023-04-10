<template>
  <div class="page-main">
    <div ref="box" class="box" v-draggable></div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background: #008c8c;
  cursor: move;
}
</style>
