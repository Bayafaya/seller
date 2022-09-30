<template>
  <div class="link" >
    <img class="icon" :src=icon alt="navbutton" />
    <transition name="fade">
      <h5 v-if="!collapsed">
        <slot></slot>
      </h5>
    </transition>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./state";

export default {
  data(){
    return{
      isActive:'/'
    }
  },
  props: {
    to: { type: String, required: false },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
  // methods:{
    
  // },
  watch:{
      isActive(value){
      const links = document.getElementsByClassName('links')
      for (let index = 0; index < links.length; index++) {
        const element = links[index];
        element.classList.remove('active')
      }
       const activePage = document.getElementById(this.$route.path)
       activePage.classList.add('active')
      }
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
.link h5{
  white-space:nowrap;
  margin-left: 14px;
}
.link .icon {
  flex-shrink: 0;
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
