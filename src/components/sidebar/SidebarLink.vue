<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <img class="icon" :src=icon alt="navbutton" />
    <transition name="fade">
      <h5 v-if="!collapsed">
        <slot></slot>
      </h5>
    </transition>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./state";

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>

<style scoped>
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
}
h5{
  font-size: 16px;
  line-height: 24px;
}
.link h5{
  white-space:nowrap;
}
.link .icon {
  flex-shrink: 0;
  width: 20px;
  margin-right: 14px;
}


.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.1s ease;
}


</style>
