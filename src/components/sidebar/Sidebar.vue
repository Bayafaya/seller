<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <nav id="sidebarNav">
      <ul class="nav__links">
        <li class="links" @click="toggleSidebar">
          <sidebar-link icon="/src/images/ri-menu-line.svg">Закрыть окно</sidebar-link>
        </li>
        <li class="links active" @click="$router.push('/')" id="/">
          <sidebar-link  to="/"
            icon="/src/images/ri-pie-chart-line.svg"
            >Приборный панель</sidebar-link
          >
        </li>
        <li class="links" @click="$router.push('/products')" id="/products">
          <sidebar-link icon="/src/images/ri-inbox-archive-line.svg" to="/products"
            >Товары</sidebar-link
          >
        </li>
        <li class="links" @click="$router.push('/notifications')" id="/notifications">
          <sidebar-link
            icon="/src/images/ri-notification-3-line.svg" to="/notifications"
            >Акции</sidebar-link
          >
        </li>
        <li class="links" @click="$router.push('/reviews')" id="/reviews">
          <sidebar-link
            icon="/src/images/ri-star-line.svg" to="/reviews"
            >Отзывы</sidebar-link
          >
        </li>
        <li class="links" @click="$router.push('/profile')" id="/profile">
          <sidebar-link
            icon="/src/images/ri-user-3-line.svg" to="/profile"
            >Профиль</sidebar-link
          >
        </li>
        <li class="links" @click="toggleSidebar">
          <sidebar-link 
            icon="/src/images/ri-sun-line.svg"
            >Выбрать тему</sidebar-link
          >
        </li>
        
      </ul>
      <div class="exit"><img src="/src/images/ri-logout-box-r-line.svg" alt="logout" /></div>
    </nav>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
export default {
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
  // mounted(){
  //   const route = useRoute();
  //     console.log(route.path)
  // },
  // watch:{
  //     isActive(value){
  //       const route = useRoute();
  //       console.log(route.path)
  //     }
  // }
};
</script>

<style scoped>
.sidebar {
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s ease;
}
.sidebar nav {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid var(--light-color-8);
  padding: 4px 0 26px;
}
.nav__links {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  row-gap: 8px;
  width: 100%;
}
.links {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 16px;
  border-left: 2px solid transparent;
  width: 100%;
  transition: 0.5s;
}

.links:hover {
  background: var(--primary-color-8);
  border-left: 2px solid var(--primary-color);
  filter: invert(50%) sepia(82%) saturate(925%) hue-rotate(99deg)
    brightness(94%) contrast(104%);
  cursor: pointer;
}
.links:active {
  background: var(--primary-color-8);
  border-left: 2px solid var(--primary-color);
  filter: invert(50%) sepia(82%) saturate(925%) hue-rotate(99deg)
    brightness(94%) contrast(104%);
  cursor: pointer;
}
.exit {
  padding: 16px;
  border-left: 2px solid transparent;
  width: 100%;
}
.exit:hover {
  background: var(--primary-color-8);
  border-left: 2px solid var(--primary-color);
  filter: invert(50%) sepia(82%) saturate(925%) hue-rotate(99deg)
    brightness(94%) contrast(104%);
  cursor: pointer;
}
.exit:active {
  background: var(--primary-color-8);
  border-left: 2px solid var(--primary-color);
  filter: invert(50%) sepia(82%) saturate(925%) hue-rotate(99deg)
    brightness(94%) contrast(104%);
  cursor: pointer;
}
.active{
  background: var(--primary-color-8);
  border-left: 2px solid var(--primary-color);
  filter: invert(50%) sepia(82%) saturate(925%) hue-rotate(99deg)
  brightness(94%) contrast(104%);
  cursor: pointer;
}

</style>
