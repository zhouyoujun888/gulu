<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(`g-button-group的子元素应该是g-button,你写的是${name}`);
      }
    }
  },
};
</script>

<style lang="scss" >
.g-button-group {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    margin-left: -1px;
    &:hover {
      z-index: 1;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
}
</style>
