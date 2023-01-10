<template>
     <div class="header__of__registration">
        <div class="exit" @click="previousStep">
          <img src="/images/ri-arrow-go-back-fill.svg" alt="go-back" />
          <h5>вернуться</h5>
        </div>
        <img src="/images/Logo.svg" alt="Logo" />
      </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
    ...mapMutations({
      previousStep:"auth/previousStep",
    }),
}
}
</script>

<style scoped>
.header__of__registration {
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 64px;
}
.header__of__registration img:nth-child(2) {
  margin: 0 auto;
}
.header__of__registration .exit {
  position: absolute;
}
.exit {
  display: flex;
  column-gap: 8px;
  cursor: pointer;
}
</style>