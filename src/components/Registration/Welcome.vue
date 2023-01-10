<template>
  <div class="welcome">
    <div class="sign__up">
      <img src="/images/Logo.svg" alt="Logo" />
      <div class="welcome__text">
        <h4>Добро пожаловать</h4>
        <div>
          Brand House <br />
          Vendor
        </div>
      </div>
      <div class="login__btns">
        <default-button @click="changeDirectionInLogin(2)"
          >Зарегистрироваться</default-button
        >
        <default-button @click="changeDirectionInLogin(1)"
          >Войти</default-button
        >
      </div>
    </div>
    <div class="partners">
      <h5>C нами уже работают</h5>
      <img src="/images/Logos.svg" alt="Logos" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import DefaultButton from "../../components/Ui/DefaultButton.vue";
export default {
  components: { DefaultButton },
  methods: {
    ...mapMutations({
      changeDirectionInLogin: "auth/changeDirectionInLogin",
    }),
  },
};
</script>

<style scoped>
.welcome {
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 64px;
  padding-bottom: 8vh;
  height: 100vh;
  gap: 110px;
}
.sign__up {
  display: grid;
}
.sign__up img {
  height: 56px;
  width: 224px;
}
.sign__up div:nth-child(2) {
  align-self: flex-end;
}

.partners {
}
.welcome__text h4 {
  color: var(--count-of-product);
}
.welcome__text div {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  font-size: 80px;
  line-height: 88px;
}
.login__btns {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  gap: 24px;
  height: 56px;
  align-self: flex-end;
}
</style>
