<template>
  <button
    class="g-button"
    :class="{ [`icon-${icon_position}`]: true }"
    @click="$emit('click')"
  >
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import icon from "./icon.vue";
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
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "g-icon": icon,
  },
};
</script>

<style lang="scss">
// 动画变亮
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
