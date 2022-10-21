<template>
  <div class="container">
    <Welcome v-if="$store.state.auth.direction === 0" />
    <existing-user v-if="$store.state.auth.direction === 1" />
    <div v-if="$store.state.auth.direction === 2">
      <header-of-registration />
      <div v-if="$store.state.auth.step === 1" class="container__registration">
        <title-of-steps-and-progress-bar :titleAndProgress="titleAndProgress" />
        
        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 2"
        class="container__registration"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress2"
        />
        2
        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 3"
        class="container__registration"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress3"
        />
        3
        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 4"
        class="container__registration"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress4"
        />
        4
        <default-button @click="nextStep">Далее</default-button>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from "../components/Registration/Welcome.vue";
import ExistingUser from "../components/Registration/ExistingUser.vue";
import ProgressBar from "../components/Ui/ProgressBar.vue";
import HeaderOfRegistration from "../components/Registration/HeaderOfRegistration.vue";
import TitleOfStepsAndProgressBar from "../components/Registration/TitleOfStepsAndProgressBar.vue";
import DefaultButton from "../components/Ui/DefaultButton.vue";
import { mapMutations } from "vuex";
import SearchInput from "../components/Ui/SearchInput.vue";

export default {
  data() {
    return {
      searchCountryData: {
        icon: true,
        price: false,
        placeholder: "Поиск Страны",
      },
      titleAndProgress: {
        title: "Выберите страну",
        percent: "2%",
      },
      titleAndProgress2: {
        title: "Выберите страну",
        percent: "10%",
      },
      titleAndProgress3: {
        title: "Выберите страну",
        percent: "20%",
      },
      titleAndProgress4: {
        title: "Выберите страну",
        percent: "30%",
      },
 
    };
    
  },
  components: {
    Welcome,
    ExistingUser,
    ProgressBar,
    HeaderOfRegistration,
    TitleOfStepsAndProgressBar,
    DefaultButton,
    SearchInput,
  },
  methods: {
    ...mapMutations({
      nextStep: "auth/nextStep",
    }),
  },
};
</script>

<style scoped>
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
.title__of__steps__and__progress__bar{
    padding-bottom: 64px;
}
.title__of__steps__and__progress__bar h4{
  margin-bottom: 24px;
}
</style>
