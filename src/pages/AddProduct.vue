<template> 
  <div class="container">
    <div class="exit">
      <img src="/images/ri-arrow-go-back-fill.svg" alt="go-back" />
      <h5>вернуться</h5>
    </div>
    <form>
      <div class="add__product__header">
        <h3>Создать товар</h3>
        <div class="public__btn">
          <default-button>Опубликовать</default-button>
        </div>
      </div>
      <hr />
      <div class="add__product__form">
        <div class="add__product__form__left__side">
          <div class="add__product__form__description">
            <search-input
              :dataAboutInput="{
                price: false,
                icon: false,
                placeholder: `Название`,
              }"
            />
            <description-input :dataAboutInput="`Описание`" />
            <search-input
              :dataAboutInput="{
                price: false,
                icon: false,
                placeholder: `Краткое описание`,
              }"
            />
          </div>
          <div class="add__product__form__count__of__products">
            <span>Количество на складе</span>
            <div class="type__and__count__of__products__block">
              <div class="type__and__count__of__products">
                <div class="select__type__of__product">
                  <q-select
                    filled
                    square
                    standouts
                    v-model="someShit"
                    :options="[
                      `Упаковка`,
                      'Штук',
                      'Коробка',
                      'Килограмм',
                      'Литр',
                    ]"
                    color="green"
                  />
                </div>
                <div>
                  <search-input
                    :dataAboutInput="{
                      price: true,
                      icon: false,
                      placeholder: `0`,
                    }"
                  />
                </div>
              </div>
              <div class="radios">
                <q-radio
                  v-model="shape"
                  color="green"
                  val="Управляйте запасами"
                  label="Управляйте запасами"
                />
                <q-radio
                  v-model="shape"
                  color="green"
                  val="В наличии"
                  label="В наличии"
                />
              </div>
            </div>
          </div>
          <!-- ---------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!------------------------------ -->
          <data-about-product />
          <!-- ------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-------------------- -->
          <div class="media__input__block">
            <div>
              <upload-files
                placeholder="Добавить фото"
                title="Фотографии"
                iconSrc="/images/ri-image-add-line.svg"
              />
            </div>
            <div class="youtube">
              <span>Видео обзор</span>
              <search-input
                :dataAboutInput="{
                  price: false,
                  icon: false,
                  placeholder: `Вставить ссылку в из youtube`,
                }"
              />
            </div>
          </div>
        </div>
        <div class="add__product__form__right__side">
          <div class="status__and__visible__block">
            <div class="status__and__visible">
              <span> Статус </span>
              <div class="status__and__visible__select">
                <q-select
                  style="border-bottom: 1px solid var(--border-of-stats)"
                  square
                  standouts
                  size="32px"
                  filled
                  v-model="status"
                  :options="[
                    'Архив',
                    'Опубликовано ',
                    'Черновик ',
                    'На утверждении',
                  ]"
                  color="green"
                />
              </div>
            </div>
            <div class="status__and__visible">
              <span> Видимость </span>
              <div class="status__and__visible__select">
                <q-select
                  style="border-bottom: 1px solid var(--border-of-stats)"
                  square
                  standouts
                  filled
                  v-model="visible"
                  :options="[
                    'Каталог и поиск',
                    'Каталог ',
                    'Поиск ',
                    'Скрыто везде',
                  ]"
                  color="green"
                />
              </div>
            </div>
          </div>
          <div class="categories__brands">
            <div class="categories__brands__item">
              <!-- sssssssss отступы-->
              <span>Выбрать категорию</span>
              <basic-filtering
                placeholderTxt="Поиск категории"
                noOptionPlaceholder="Нету такой категории"
                :itemList="[
                  'Вафли весовые',
                  'Кондитерские изделия',
                  'Замороженные полуфабрикаты',
                  'Напитки',
                ]"
              />
            </div>
            <div class="categories__brands__item">
              <span>Выбрать бренд</span>
              <basic-filtering
                placeholderTxt="Поиск бренда"
                noOptionPlaceholder="Нету такого бренда"
                :itemList="[
                  'Каталог и поиск',
                  'Каталог',
                  'Поиск',
                  'Скрыто везде',
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DefaultButton from "../components/Ui/DefaultButton.vue";
import SearchInput from "../components/Ui/SearchInput.vue";
import DescriptionInput from "../components/Ui/DescriptionInput.vue";
import { ref } from "vue";
import UploadFiles from "../components/Ui/UploadFiles.vue";
import BasicFiltering from "../components/Ui/BasicFiltering.vue";
import DataAboutProduct from "../components/DataAboutProduct.vue";

export default {
  setup() {
    return {
      shape: ref("Управляйте запасами"),
      someShit: ref("Упаковка"),
      status: ref("Черновик"),
      visible: ref("Каталог и поиск"),
    };
  },
  components: {
    DefaultButton,
    SearchInput,
    DescriptionInput,
    UploadFiles,
    BasicFiltering,
    DataAboutProduct,
},

};
</script>

<style scoped>
.exit {
  display: flex;
  column-gap: 8px;
  align-items: center;
  cursor: pointer;
  margin-top: 48px;
  margin-bottom: 32px;
}
.add__product__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}
.public__btn {
  width: 200px;
}
hr {
  border: none;
  height: 1px;
  color: var(--recent-item-border);
  background-color: var(--recent-item-border);
}
.add__product__form {
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 48px 0 124px;
}
.add__product__form__left__side {
  padding: 0 40px 0 0;
  border-right: 1px solid var(--recent-item-border);
}
.add__product__form__description {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.add__product__form__description div:nth-child(1) {
  margin-bottom: 24px;
}
.add__product__form__count__of__products {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.type__and__count__of__products__block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.type__and__count__of__products {
  display: flex;
  gap: 18px;
}
.select__type__of__product {
  width: 200px;
}
.type__and__count__of__products div:nth-child(2) {
  width: 100%;
}
.radios {
  display: flex;
  flex-direction: column;
}
.media__input__block {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.youtube span {
  display: block;
  margin-bottom: 8px;
}
.add__product__form__right__side {
  padding-left: 40px;
}
.status__and__visible__block {
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-bottom: 1px solid var(--recent-item-border);
  padding-bottom: 32px;
}
.status__and__visible span {
  display: block;
  margin-bottom: 8px;
}
.categories__brands {
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.categories__brands div:nth-child(1) {
  border-bottom: 1px solid var(--recent-item-border);
}
.categories__brands__item span {
  display: block;
  margin-bottom: 16px;
}

</style>
