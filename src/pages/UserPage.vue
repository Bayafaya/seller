<template>
  <section @click="toggleMenu">
    <div class="menu hamburger1">
      <span id="1"></span>
      <span id="2"></span>
      <span id="3"></span>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    toggleMenu(){
      document.getElementById('1').classList.toggle('transform__first')
      document.getElementById('2').classList.toggle('transform__second')
      document.getElementById('3').classList.toggle('transform__third')
    }
  },
};
</script>

<style>
section {
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 19px;
  width: 22px;
  position: relative;
  cursor: pointer;
}
.menu span{
  display: inline-block;
  flex: 1 1 unset;
  width: 100%;
  height: 2px;
  background-color: #424242;
  transition: all 0.5s ease;
}

.hamburger1 span:nth-of-type(1),
.hamburger1 span:nth-of-type(3) {
  transform-origin: left;
}
.transform__first{
  transform: rotate(45deg);
}
.transform__second{
  opacity: 0;
}
.transform__third{
  transform: rotate(-45deg);
}
</style>
