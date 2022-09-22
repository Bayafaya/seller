<template>
  <div class="app">
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import { sidebarWidth } from "@/components/sidebar/state";

export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: Arial, Helvetica, sans-serif; */
}
:root {
  --primary-color: rgba(45, 190, 100, 1);
  --primary-color-32: rgba(45, 190, 100, 0.32);
  --primary-color-8: rgba(45, 190, 100, 0.08);

  --light-color: rgba(21, 21, 21, 1);
  --light-color-72: rgba(21, 21, 21, 0.72);
  --light-color-48: rgba(21, 21, 21, 0.48);
  --light-color-8: rgba(21, 21, 21, 0.08);
  --light-color-4: rgba(21, 21, 21, 0.04);

  --dark-color: rgba(255, 255, 255, 1);
  --dark-color-72: rgba(255, 255, 255, 0.72);
  --dark-color-56: rgba(255, 255, 255, 0.56);
  --dark-color-24: rgba(255, 255, 255, 0.24);
  --dark-color-16: rgba(255, 255, 255, 0.16);
  --dark-color-8: rgba(255, 255, 255, 0.08);
}
h1 {
  font-size: 48px;
  line-height: 56px;
  font-weight: 400;
}
h2 {
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;
}
h3 {
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
}
h4 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
}
h5 {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}
h6 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}
span {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
}
.container{
  width:  64%; 
  margin: 0 auto;
}
</style>
