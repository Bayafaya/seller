<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <nav id="sidebarNav">
      <ul class="nav__links">
        <li @click="toggleSidebar">
          <sidebar-link  to='/' icon="/src/images/navbutton.png">Закрыть окно</sidebar-link>
        </li>
        <li @click="toggleSidebar">
          <sidebar-link
            to="/"
            icon="/src/images/Vector.png"
            >Приборный панель</sidebar-link
          >
        </li>
        <li @click="toggleSidebar">
          <sidebar-link to="/"  icon="/src/images/box.png"
            >Товары</sidebar-link
          >
        </li>
        <li @click="toggleSidebar">
          <sidebar-link
            to="/"
            icon="/src/images/notification.png"
            >Акции</sidebar-link
          >
        </li>
        <li  @click="toggleSidebar">
          <sidebar-link
            to="/"
            icon="/src/images/feedback.png"
            >Отзывы</sidebar-link
          >
        </li>
        <li  @click="toggleSidebar">
          <sidebar-link
            to="/"
            icon="/src/images/profile.png"
            >Профиль</sidebar-link
          >
        </li>
        <li  @click="toggleSidebar">
          <sidebar-link
            to="/"
            icon="/src/images/uilight.png"
            >Выбрать тему</sidebar-link
          >
        </li>
      </ul>
      <div class="exit"><img src="../../images/exit.png" alt="exit" /></div>
    </nav>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
export default {
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
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
.nav__links li {
  display: flex;
  align-items: center;
  padding: 16px;
  border-left: 2px solid transparent;
  width: 100%;
}
.nav__links li img {
  width: 20px;
}
.nav__links li:nth-child(6) {
  padding: 18px;
}
.nav__links li:nth-child(6) img {
  width: 16px;
}
.nav__links li:hover {
  background: var(--primary-color-8);
  border-left: 2px solid var(--primary-color);
  filter: invert(50%) sepia(82%) saturate(925%) hue-rotate(99deg)
    brightness(94%) contrast(104%);
  cursor: pointer;
}
.nav__links li:active {
  background: var(--primary-color-8);
  border-left: 2px solid var(--primary-color);
  filter: invert(50%) sepia(82%) saturate(925%) hue-rotate(99deg)
    brightness(94%) contrast(104%);
  cursor: pointer;
}
.exit {
  padding: 16px;
  border-left: 2px solid transparent;
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
.exit img {
  width: 20px;
}
.titleofnavlinks {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s ease;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.titleofnavlinks ul {
  list-style: none;
}
.titleofnavlinks ul li {
  padding: 16px;
}
</style>
