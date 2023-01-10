<template>
    <div class="container__form">
      <div class="edit__store">
        <div class="back__link" @click="changePage(1)">
          <img src="/images/ri-arrow-go-back-fill.svg" alt="back" />
          <h5>вернуться</h5>
        </div>
        <h3>Отпуск магазина</h3>
      </div>
      <div class="close__market">
        <div class="radio__btn__block">
          <div>
            <input type="radio" name="vacation" id="on__vacation" />
            <label for="on__vacation"><h6>Включить режим отпуска</h6></label>
          </div>
          <div>
            <input type="radio" name="vacation" id="off__vacation" />
            <label for="off__vacation"><h6>Отключить покупку</h6></label>
          </div>
        </div>
        <div class="user__data__label">
              <span>Выберите город</span>
              <select-gray :options="options" />
        </div>
        <description-input dataAboutInput="Сообщение об отпуске"/>
        <default-button><h5>Применить</h5></default-button>
      </div>
    </div>
  </template>
  
  <script>
  import SelectGray from '../components/Ui/SelectGray.vue';
  import DescriptionInput from '../components/Ui/DescriptionInput.vue';
  import DefaultButton from '../components/Ui/DefaultButton.vue';
  import {mapMutations} from 'vuex';
  export default { 
    data(){
      return{
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
      }
    },
    components: { SelectGray, DescriptionInput, DefaultButton },
    methods:{
        ...mapMutations({
            changePage:'profile/changePage',
        }),
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
    cursor: pointer;
  }
  .edit__store h3 {
    padding: 48px 0 0 0;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + label {
    background-image: url(../images/ri-radio-button-line.svg);
    background-position: top left;
    background-repeat: no-repeat;
  }
  label {
    display: flex;
    align-items: center;
    padding-left: 30px;
    height: 160px;
    height: 24px;
    cursor: pointer;
    background-image: url(../images/ri-checkbox-blank-circle-line.svg);
    background-position: top left;
    background-repeat: no-repeat;
  }
  .radio__btn__block{
    display: grid;
    grid-template-columns:1fr 1fr ;
  }
  .user__data__label {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }
  .close__market{
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  row-gap: 48px;
  }
  </style>
  