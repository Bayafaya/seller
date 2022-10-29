<template>
  <div class="data__about__product">
    <div class="data__about__product__header">
      <h5>Данные товара</h5>
      <q-select
        style="
          padding-left: 24px;
          width: 104px;
          border-left: 1px solid var(--border-of-stats);
        "
        borderless
        color="green"
        v-model="simple"
        :options="['Просто', 'salam']"
      />
    </div>
    <div class="data__about__product__side__scroll">
      <ul>
        <li
          class="data__about__product__side__scroll__li active__page"
          @click="changeToActivePage(1, $event)"
        >
          <h5>Основные</h5>
        </li>
        <li
          class="data__about__product__side__scroll__li"
          @click="changeToActivePage(2, $event)"
        >
          <h5>Запасы</h5>
        </li>
        <li
          class="data__about__product__side__scroll__li"
          @click="changeToActivePage(3, $event)"
        >
          <h5>Доставка</h5>
        </li>
        <li
          class="data__about__product__side__scroll__li"
          @click="changeToActivePage(4, $event)"
        >
          <h5>Сопутствующие</h5>
        </li>
        <li
          class="data__about__product__side__scroll__li"
          @click="changeToActivePage(5, $event)"
        >
          <h5>Атрибуты</h5>
        </li>
        <li
          class="data__about__product__side__scroll__li"
          @click="changeToActivePage(6, $event)"
        >
          <h5>Дополнительно</h5>
        </li>
        <li
          class="data__about__product__side__scroll__li"
          @click="changeToActivePage(7, $event)"
        >
          <h5>Магазин</h5>
        </li>
        <li
          class="data__about__product__side__scroll__li"
          @click="changeToActivePage(8, $event)"
        >
          <h5>Комиссия</h5>
        </li>
      </ul>
    </div>
    <div class="data__about__product__input__area">
      <div v-if="$store.state.productDataWindow.profileWindow === 1">
        <div class="first__block__of__main">
          <div class="first__block__of__main__first">
            <div class="input__with__title">
              <span> Базовая цена</span>
              <search-input
                :dataAboutInput="{ icon: false, price: true, placeholder: 0 }"
              />
            </div>
            <div class="input__with__title">
              <span> Акционная цена</span>
              <search-input
                :dataAboutInput="{ icon: false, price: true, placeholder: 0 }"
              />
            </div>
          </div>
          <div v-if="$store.state.productDataWindow.expansion">
            <div class="first__block__of__main__first">
              <div class="input__with__title">
                <span> Начало Акции </span>
                <q-input
                  square
                  filled
                  v-model="date"
                  mask="date"
                  :rules="['date']"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="input__with__title">
                <span> Завершение Акции </span>
                <q-input
                  square
                  filled
                  v-model="date"
                  mask="date"
                  :rules="['date']"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
          </div>
          <div class="tooltip__block">
            <h6
              @click="expansionToggle"
              v-if="$store.state.productDataWindow.expansion === false"
            >
              Запланировать
            </h6>
            <h6
              @click="expansionToggle"
              v-if="$store.state.productDataWindow.expansion === true"
            >
              Отмена
            </h6>
            <tooltip-icon-question textForTooltip="текст подсказки" />
          </div>
        </div>
        <div class="max__min__product__count">
          <div class="input__with__title">
            <span>Минимальное количество</span>
            <search-input
              :dataAboutInput="{ icon: false, price: true, placeholder: 0 }"
            />
          </div>
          <div class="input__with__title">
            <span>Максимальное количество</span>
            <search-input
              :dataAboutInput="{ icon: false, price: true, placeholder: 0 }"
            />
          </div>
        </div>
      </div>
      <div v-if="$store.state.productDataWindow.profileWindow === 2">
        <div class="first__block__of__main">
          <div class="input__with__title">
            <span>Артикул</span>
            <search-input
              :dataAboutInput="{ icon: false, price: false, placeholder: '' }"
            />
          </div>
          <q-checkbox
            style="margin: 26px 0"
            dense
            v-model="left2"
            color="green"
            size="48px"
            checked-icon="radio_button_checked"
            unchecked-icon="radio_button_unchecked"
            indeterminate-icon="help"
            label="Управление уровнем запасов (количеством)"
            @click="show"
          />
          <div class="root__with__products" v-if="left2">
            <div class="input__with__title">
              <span>Количество в запасе</span>
              <div class="with__tooltip">
                <search-input
                  :dataAboutInput="{ icon: false, price: true, placeholder: 0 }"
                />
                <tooltip-icon-question textForTooltip="текст подсказки" />
              </div>
            </div>
            <div class="input__with__title">
              <span>Разрешить предзаказы?</span>
              <div>
                <div class="with__tooltip">
                  <q-select
                    style="width: 100%"
                    standout
                    color="green"
                    filled
                    v-model="book"
                    square
                    :options="['Не разрешать', 'Дать доступ']"
                  />
                  <tooltip-icon-question textForTooltip="текст подсказки" />
                </div>
              </div>
            </div>
            <div class="input__with__title">
              <span>Граница малых запасов</span>
              <div class="with__tooltip">
                <search-input
                  :dataAboutInput="{
                    icon: false,
                    price: false,
                    placeholder: 'Порог для всего магазина (10)',
                  }"
                />
                <tooltip-icon-question textForTooltip="текст подсказки" />
              </div>
            </div>
          </div>
          <div class="available__radios" v-else>
            <q-radio
              color="green"
              dense
              v-model="available"
              val="available"
              label="В наличии"
            />
            <q-radio
              color="red"
              dense
              v-model="available"
              val="unavailable"
              label="Нету в наличии"
            />
          </div>
        </div>
        <div class="purchase__restriction">
          <q-checkbox
            style="margin: 18px 0"
            dense
            v-model="purchaseRestriction"
            color="green"
            size="48px"
            checked-icon="radio_button_checked"
            unchecked-icon="radio_button_unchecked"
            indeterminate-icon="help"
            label="Ограничение покупок до 1 товара в заказе"
            @click="show"
          />
          <tooltip-icon-question textForTooltip="текст подсказки" />
        </div>
      </div>
      <div v-if="$store.state.productDataWindow.profileWindow === 3">
        <div class="first__block__of__main">
          <div class="input__with__title">
            <span> Акционная цена</span>
            <search-input
              :dataAboutInput="{ price: true, icon: false, placeholder: 0 }"
            />
          </div>
          <div class="delivery">
            <div class="delivery__header">
              <span>Размеры (cm)</span>
              <tooltip-icon-question textForTooltip="some txt" />
            </div>
            <search-input
              :dataAboutInput="{
                price: false,
                icon: false,
                placeholder: `Длина`,
              }"
            />
            <search-input
              :dataAboutInput="{
                price: false,
                icon: false,
                placeholder: `Ширина`,
              }"
            />
            <search-input
              :dataAboutInput="{
                price: false,
                icon: false,
                placeholder: `Высота`,
              }"
            />
          </div>
        </div>
        <div style="margin-top: 32px" class="input__with__title">
          <span>Класс доставки</span>
          <div>
            <div class="with__tooltip">
              <q-select
                style="width: 100%"
                standout
                color="green"
                filled
                v-model="deliveryType"
                square
                :options="['Класс доставки не указан', 'Класс доставки указан']"
              />
              <tooltip-icon-question textForTooltip="текст подсказки" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="$store.state.productDataWindow.profileWindow === 4">
        <div class="related">
          <div class="input__with__title">
            <span>Апсейл</span>
            <div>
              <div class="with__tooltip">
                <search-input
                  :dataAboutInput="{
                    price: false,
                    icon: true,
                    placeholder: `Поиск по товарам…`,
                  }"
                />
                <tooltip-icon-question textForTooltip="текст подсказки" />
              </div>
            </div>
          </div>
          <div class="input__with__title">
            <span>Кросселы</span>
            <div>
              <div class="with__tooltip">
                <search-input
                  :dataAboutInput="{
                    price: false,
                    icon: true,
                    placeholder: `Поиск по товарам…`,
                  }"
                />
                <tooltip-icon-question textForTooltip="текст подсказки" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="$store.state.productDataWindow.profileWindow === 5">
        Атрибуты
      </div>
      <div v-if="$store.state.productDataWindow.profileWindow === 6">
        <div class="first__block__of__main">
          <div class="input__with__title">
            <span>Примечание к покупке</span>
            <div>
              <div class="with__tooltip">
               <description-input dataAboutInput='Примечание'/>
                <tooltip-icon-question textForTooltip="текст подсказки" />
              </div>
            </div>
          </div>
          <div 
          style="
          padding-top: 32px;
          margin-top: 32px;
          border-top: 1px solid var(--border-of-stats);
          " 
          class="input__with__title">
            <span>Порядок</span>
            <div>
              <div class="with__tooltip">
                <search-input :dataAboutInput="{price:true,icon:false,placeholder:0}"/>
                <tooltip-icon-question textForTooltip="текст подсказки" />
              </div>
            </div>
          </div>
        </div>
        <q-checkbox
            style="margin: 26px 0"
            dense
            v-model="reviews"
            color="green"
            size="48px"
            checked-icon="radio_button_checked"
            unchecked-icon="radio_button_unchecked"
            indeterminate-icon="help"
            label="Включить отзывы"
            @click="show"
          />
      </div>
      <div v-if="$store.state.productDataWindow.profileWindow === 7">
        <div class="input__with__title">
            <span>Магазин</span>
            <div>
              <q-select
                    style="width: 100%"
                    standout
                    color="green"
                    filled
                    v-model="market"
                    square
                    :options="[` Магазин 1`,` Магазин 2`,` Магазин 3`]"
                  />  
            </div>
          </div>
      </div>
      <div v-if="$store.state.productDataWindow.profileWindow === 8">
        <div class="input__with__title">
            <span>Магазин</span>
            <div>
              <q-select
                    style="width: 100%"
                    standout
                    color="green"
                    filled
                    v-model="market"
                    square
                    :options="[` Магазин 1`,` Магазин 2`,` Магазин 3`]"
                  />  
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapMutations } from "vuex";
import SearchInput from "./Ui/SearchInput.vue";
import TooltipIconQuestion from "./Ui/TooltipIconQuestion.vue";
import DescriptionInput from './Ui/DescriptionInput.vue';
export default {
  components: { SearchInput, TooltipIconQuestion, DescriptionInput },
  setup() {
    return {
      simple: ref("Просто"),
      date: ref("2022/18/03"),
      left2: ref(false),
      available: ref("available"),
      purchaseRestriction: ref(false),
      book: ref("Не разрешать"),
      deliveryType: ref("Класс доставки не указан"),
      reviews: ref(false),
      market:ref(`Выбрать Магазин ...`),
    };
  },
  methods: {
    ...mapMutations({
      expansionToggle: "productDataWindow/expansionToggle",
      statePage: "productDataWindow/changePageProductDataWind",
    }),
    changeToActivePage(page, event) {
      this.statePage(page);
      const allPages = document.querySelectorAll(
        `.data__about__product__side__scroll__li`
      );
      allPages.forEach((element) => element.classList.remove(`active__page`));
      event.target.classList.add(`active__page`);
    },
    show() {
      console.log(this.reviews);
    },
  },
};
</script>

<style scoped>
.data__about__product {
  display: grid;
  grid-template-columns: 220px auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "header header"
    "sideScroll inputArea";
}
.data__about__product__header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 0;
  border-bottom: 1px solid var(--border-of-stats);
}
.data__about__product__side__scroll {
  grid-area: sideScroll;
  border-right: 1px solid var(--border-of-stats);
}
.data__about__product__side__scroll ul {
  display: flex;
  flex-direction: column;
  list-style: none;
}
.data__about__product__side__scroll__li {
  padding: 16px;
  border-bottom: 1px solid var(--border-of-stats);
  cursor: pointer;
}
.data__about__product__side__scroll__li:hover {
  border-right: 2px solid var(--primary-color);
}
.data__about__product__side__scroll__li h5 {
  pointer-events: none;
}
.active__page {
  border-right: 2px solid var(--primary-color);
}
.data__about__product__input__area {
  grid-area: inputArea;
  padding: 24px;
}
.input__with__title {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.with__tooltip {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
}
.input__with__title span {
  display: block;
  margin-bottom: 10px;
}
.first__block__of__main {
  border-bottom: 1px solid var(--border-of-stats);
  padding: 0 0 34px 0;
}
.first__block__of__main__first {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 26px;
}
/* ----------tooltip--------- */
.tooltip__block {
  display: flex;
  align-items: center;
  gap: 8px;
}
.tooltip__block h6 {
  color: var(--primary-color);
  font-weight: 700;
  border-bottom: 1px solid var(--primary-color);
  cursor: pointer;
}

/* ----------tooltipEnd--------- */
.max__min__product__count {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 32px;
}
.available__radios {
  display: flex;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid var(--border-of-stats);
}
.purchase__restriction {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.root__with__products {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.delivery {
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  gap: 16px;
}
.delivery__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.related{
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
