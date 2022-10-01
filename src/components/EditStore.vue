<template>
    <div class="container__form">
      <div class="edit__store">
        <div class="back__link">
          <img src="../images/ri-arrow-go-back-fill.svg" alt="back" />
          <h5>вернуться</h5>
        </div>
        <h3>Настройка магазина</h3>
      </div>
  
      <form class="form">
        <h4>Контактные данные</h4>
        <div class="user__data">
          <search-input :dataAboutInput="dataAboutInput" />
          <search-input :dataAboutInput="dataAboutInput" />
          <description-input dataAboutInput="Описание" />
          <div class="user__data__label">
            <span>Номер телефона</span>
            <phone-number-input />
          </div>
          <div class="user__data__label">
            <span>Выберите страну</span>
            <select-gray :options="options" />
          </div>
          <div class="user__data__label">
            <span>Выберите область</span>
            <select-gray :options="options" />
          </div>
          <div class="user__data__label">
            <span>Выберите город</span>
            <select-gray :options="options" />
          </div>
          <search-input :dataAboutInput="dataAboutInputIndex" />
          <search-input :dataAboutInput="dataAboutInputIndex" />
          <search-input :dataAboutInput="dataAboutInputIndex" />
        </div>
        <div class="upload__files__block">
          <h4>Оформление</h4>
          <upload-files
            placeholder="Добавить логотип"
            iconSrc="src/images/ri-image-add-line.svg"
          />
          <div class="user__data__label">
            <span>Тип баннера</span>
            <div class="type__of__baner">
              <h6>Выбрать</h6>
              <img src="../images/ri-arrow-right-s-fill.svg" alt="arrow" />
            </div>
          </div>
        </div>
        <default-button>Сохранить</default-button>
      </form>
        <size-of-banner :show="false"/>
    </div>
  </template>
  
  <script>
  import DescriptionInput from "../components/Ui/DescriptionInput.vue";
  import PhoneNumberInput from "../components/Ui/PhoneNumberInput.vue";
  import SearchInput from "../components/Ui/SearchInput.vue";
  import MySelect from "../components/Ui/MySelect.vue";
  import SelectGray from "../components/Ui/SelectGray.vue";
  import UploadFiles from "../components/Ui/UploadFiles.vue";
  import DefaultButton from "../components/Ui/DefaultButton.vue";
  import SizeOfBanner from "../components/SizeOfBanner.vue";
  
  export default {
    data() {
      return {
        dataAboutInput: {
          icon: false,
          price: false,
          placeholder: "Название магазина",
          price: false,
        },
        dataAboutInputIndex: {
          icon: false,
          price: false,
          placeholder: "Почтовый индекс",
          price: false,
        },
        options: [
          "Азербайджан",
          "Армения",
          "Беларусь",
          "Казахстан",
          "Кыргызстан",
          "Молдова",
          "Россия",
          "Таджикистан",
          "Узбекистан",
          "Украина",
        ],
      };
    },
    components: {
      SearchInput,
      DescriptionInput,
      PhoneNumberInput,
      MySelect,
      SelectGray,
      UploadFiles,
      DefaultButton,
      SizeOfBanner
  },
  };
  </script>
  
  <style scoped>
  span {
    color: var(--light-color-48);
  }
  .edit__store {
    display: flex;
    flex-direction: column;
    padding: 48px 0 48px;
    border-bottom: 1px solid var(--light-color-8);
  }
  .back__link {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  .edit__store h3 {
    padding: 48px 0 0 0;
  }
  .form {
    padding: 48px 0;
  }
  .user__data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 48px;
    grid-template-areas:
      "market market__label"
      "description description"
      "phone__num country"
      "regions city"
      "street1 street2"
      "mail__index none";
    grid-column-gap: 8px;
    grid-row-gap: 32px;
    grid-template-rows: auto auto auto auto auto auto;
    grid-column-gap: 16px;
    padding-top: 32px;
    border-bottom: 1px solid var(--light-color-8);
  }
  .user__data__label {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  .user__data div:nth-child(1) {
    grid-area: market;
  }
  .user__data div:nth-child(2) {
    grid-area: market__label;
  }
  .user__data div:nth-child(3) {
    grid-area: description;
  }
  
  .user__data div:nth-child(4) {
    grid-area: phone__num;
    margin-top: 32px;
  }
  .user__data div:nth-child(5) {
    grid-area: country;
    margin-top: 32px;
  }
  v .user__data div:nth-child(6) {
    grid-area: regions;
  }
  .user__data div:nth-child(7) {
    grid-area: city;
  }
  .user__data div:nth-child(8) {
    grid-area: street1;
    margin-top: 32px;
  }
  .user__data div:nth-child(9) {
    grid-area: street2;
    margin-top: 32px;
  }
  .user__data div:nth-child(10) {
    grid-area: mail__index;
  }
  .upload__files__block {
    display: flex;
    flex-direction: column;
    padding: 48px 0;
    row-gap: 32px;
  }
  /*-------------------------------------*/
  .type__of__baner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    gap: 16px;
    background: var(--light-color-4);
    border-bottom: 1px solid var(--light-color-8);
  }
  .type__of__baner:hover {
    border-bottom: 1px solid var(--light-color);
  }
  .type__of__baner:active {
    border-bottom: 2px solid var(--primary-color);
  }
  </style>
  