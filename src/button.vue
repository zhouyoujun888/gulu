<template>
  <button class="g-button" :class="{ [`icon-${icon_position}`]: true }">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  // props: ["icon", "icon_position"],
  props: {
    icon: {},
    icon_position: {
      type: String,
      default: "left",
      validator(value) {
        // if (value != "left" && value != "right") {
        //   return false;
        // } else {
        //   return true;
        // }
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style lang="scss">
.g-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      margin-left: 0.1em;
      margin-right: 0;
      order: 2;
    }
    > .content {
      order: 1;
    }
  }
}
</style>
