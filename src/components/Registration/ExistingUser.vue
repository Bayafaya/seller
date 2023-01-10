<template>
  <div class="container__registration">
    <div
      v-if="$store.state.auth.step === 1"
      class="login" 
    >
      <img src="/images/Logo.svg" alt="Logo" />
      <div>
        <h2>Войти в систему</h2>
        <div class="number__input__block">
          <h4>Введите свой номер телефона</h4>
          <phone-number-input />
          <default-button @click="nextStep">Далее</default-button>
        </div>
      </div>
    </div>
    <div
      v-if="$store.state.auth.step === 2"
      class="login registration__container"
    >
      <img src="/images/Logo.svg" alt="Logo" />
      <div>
        <h2>Войти в систему</h2>
        <div class="number__input__block">
          <h4>Подтвердите свой номер телефона</h4>
          <verification-by-code />
          <default-button>Подтвердить</default-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import DefaultButton from "../../components/Ui/DefaultButton.vue";
import VerificationByCode from "../../components/Ui/VerificationByCode.vue";
import PhoneNumberInput from "../../components/Ui/PhoneNumberInput.vue";
export default {
  components: { PhoneNumberInput, DefaultButton, VerificationByCode },
  methods: {
    ...mapMutations({
      nextStep: "auth/nextStep",
    }),
  },
};
</script>

<style>

.login {
  display: grid;
  grid-template-columns: 100%;
  padding: 64px 0 0 0;
  height: 100vh;
}
.login img {
  margin: 0 auto;
}
.number__input__block {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 80px;
}
</style>
