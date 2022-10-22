<template>
  <div class="container">
    <Welcome v-if="$store.state.auth.direction === 0" />
    <existing-user v-if="$store.state.auth.direction === 1" />
    <div v-if="$store.state.auth.direction === 2">
      <header-of-registration />
      <div
        v-if="$store.state.auth.step === 1"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar :titleAndProgress="titleAndProgress" />
        <basic-filtering />
        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 2"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress2"
        />
        <div class="gaps">
          <phone-number-input />
          <input class="whats__app" id="whats_app" type="checkbox" />
          <label class="whats__app__label" for="whats_app">Номер Вотсап</label>
        </div>

        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 3"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress3"
        />
        <div class="gaps">
          <verification-by-code />
        </div>

        <default-button @click="nextStep">Подтвердить</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 4"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress4"
        />
        <div class="gaps">
          <search-input :dataAboutInput="dataAboutInput1" />
          <search-input :dataAboutInput="dataAboutInput2" />
          <search-input :dataAboutInput="dataAboutInput3" />
        </div>
        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 5"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress5"
        />
        <div class="license__block">
          <radio-button :titles="license" group="typeOfLicense" />
        </div>
        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 6"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress6"
        />
        <div class="type__registration__block">
          <radio-button :titles="registration" group="typeOfRegistration" />
        </div>

        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 7"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress7"
        />
        <div class="gaps">
          <upload-files-registration
            :placeholder="uploadData"
            :iconSrc="`src/images/ri-file-upload-line.svg`"
          />
        </div>

        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div v-else-if="$store.state.auth.step === 8">
        <div class="main__block">
          <div class="main__left__block gaps">
            <title-of-steps-and-progress-bar
              :titleAndProgress="titleAndProgress8"
            />
            <search-input :dataAboutInput="nameOfCompany" />
            <div class="main__left__block__upload">
              <upload-files-registration
                :placeholder="uploadDataLeft"
                :iconSrc="`src/images/ri-file-upload-line.svg`"
              />
              <upload-files-registration
                :placeholder="uploadDataRight"
                :iconSrc="`src/images/ri-file-upload-line.svg`"
              />
            </div>
            <default-button @click="nextStep">Далее</default-button>
          </div>
          <div class="brand__product">
            <img src="src/images/Brand product.png" alt="Brand product" />
          </div>
        </div>
      </div>
      <div
        v-else-if="$store.state.auth.step === 9"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress9"
        />
        <div class="radio__btn__group">
          <radio-button :titles="['FBS', 'FBO']" group="typeOfDelivery" />
        </div>

        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 10"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress10"
        />
        <div class="inputs__delivery">
          <div class="inputs__delivery__item">
            <h5>от</h5>
            <search-input :dataAboutInput="deliveryPrice" />
          </div>
          <div class="inputs__delivery__item">
            <h5>до</h5>
            <search-input :dataAboutInput="deliveryPrice" />
          </div>
        </div>
        <default-button @click="nextStep">Далее</default-button>
      </div>
      <div
        v-else-if="$store.state.auth.step === 11"
        class="container__registration registration__block"
      >
        <title-of-steps-and-progress-bar
          :titleAndProgress="titleAndProgress11"
        />
        <h4>
          Благодрим за сотрудничество с нами !
        </h4>
      
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
import BasicFiltering from "../components/Ui/BasicFiltering.vue";
import PhoneNumberInput from "../components/Ui/PhoneNumberInput.vue";
import VerificationByCode from "../components/Ui/VerificationByCode.vue";
import SearchInput from "../components/Ui/SearchInput.vue";
import RadioButton from "../components/Ui/RadioButton.vue";
import UploadFilesRegistration from "../components/Ui/UploadFilesRegistration.vue";

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
        title: "Введите свой номер телефона",
        percent: "10%",
      },
      titleAndProgress3: {
        title: "Подтвердите свой номер телефона",
        percent: "20%",
      },
      titleAndProgress4: {
        title: "Введите Ваше  ФИО",
        percent: "30%",
      },
      titleAndProgress5: {
        title: "Тип лица",
        percent: "40%",
      },
      titleAndProgress6: {
        title: "Тип регистрации",
        percent: "50%",
      },
      titleAndProgress7: {
        title: "Загрузите документ подтверждающий ваш бизнес",
        percent: "60%",
      },
      titleAndProgress8: {
        title: "Название и оформление компании",
        percent: "70%",
      },
      titleAndProgress9: {
        title: "Выберите способ доставки",
        percent: "80%",
      },
      titleAndProgress10: {
        title: "Минимальная сумма доставки",
        percent: "90%",
      },  titleAndProgress11: {
        title: "Регистрация успешно пройдена",
        percent: "100%",
      },
      dataAboutInput1: {
        icon: false,
        price: false,
        placeholder: "Фамилия",
      },
      dataAboutInput2: {
        icon: false,
        price: false,
        placeholder: "Имя",
      },
      dataAboutInput3: {
        icon: false,
        price: false,
        placeholder: "Отчество",
      },
      license: [`Я физическое лицо`, "Я юридическое лицо"],
      registration: [`ИП`, `Осоо`, `ОАО`, `Патент`, `Паспорт`],
      uploadData: {
        title: `Загрузить документ `,
        body: `Свидетельство о регистрации, налоговая выписка, банковская выписка.`,
      },
      uploadDataLeft: {
        title: `Загрузить фото профиля`,
      },
      uploadDataRight: {
        title: `Загрузить обложку`,
      },
      nameOfCompany: {
        icon: false,
        price: false,
        placeholder: "Название компании",
      },
      deliveryPrice: {
        icon: false,
        price: true,
        placeholder: "0",
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
    BasicFiltering,
    PhoneNumberInput,
    VerificationByCode,
    SearchInput,
    RadioButton,
    UploadFilesRegistration,
  },
  methods: {
    ...mapMutations({
      nextStep: "auth/nextStep",
    }),
  },
};
</script>

<style scoped>
.registration__block {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.gaps {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 0 32px 0;
}
/* ---------------2-------------------- */
.whats__app[type="checkbox"] {
  display: none;
}
.whats__app[type="checkbox"]:checked + .whats__app__label {
  background-image: url(../images/ri-checkbox-circle-fill.svg);
}
.whats__app__label {
  display: inline-block;
  width: auto;
  height: 22px;
  background-position: start;
  background-image: url(../images/ri-checkbox-blank-circle-line.svg);
  background-repeat: no-repeat;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding-left: 38px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

/* ---------------5-------------------- */
.license__block {
  display: flex;
  gap: 16px;
  margin: 0 0 32px 0;
}
/* ---------------6----------------- */
.type__registration__block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 0 0 32px 0;
}
/* --------------8-------------------- */
.main__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
}
.brand__product img {
  width: 340px;
  height: 720px;
}
.main__left__block {
  width: 50%;
}
.main__left__block__upload {
  display: flex;
  gap: 24px;
  justify-content: space-between;
}
/* ---------9---------- */
.radio__btn__group {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}
/* ---------10---------- */
.inputs__delivery {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
}
.inputs__delivery__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.inputs__delivery__item h5{
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}
</style>
