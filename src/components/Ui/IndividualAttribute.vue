<template>
  <q-expansion-item
    v-if="listItem.label == `Индивидуальный атрибут товара`"
    expand-separator
    :label="listItem.label"
  >
    <q-card>
      <div class="individual__attribute">
        <search-input
          :dataAboutInput="{
            icon: false,
            price: false,
            placeholder: 'Имя:',
          }"
        />
        <div class="input__with__title">
          <span>Значение(я):</span>
          <div>
            <search-input
              :dataAboutInput="{
                price: false,
                icon: false,
                placeholder: `Введите какой-то текст или атрибуты`,
              }"
            />
          </div>
        </div>
        <q-checkbox
          style="margin: 26px 0"
          dense
          v-model="showOnPageAttribute"
          color="green"
          size="48px"
          checked-icon="radio_button_checked"
          unchecked-icon="radio_button_unchecked"
          indeterminate-icon="help"
          label="Отображение на странице товара"
        />
        <default-button
          @click.prevent="removeAttributeItem(listItem.id)"
          style="width: 96px; background-color: red; gap: 4px"
          >Удалить
          <img src="/images/ri-delete-bin-7-line.svg" alt="bin" />
        </default-button>
      </div>
    </q-card>
  </q-expansion-item>
  <q-expansion-item v-else expand-separator :label="listItem.label">
    <q-card>
      <div class="individual__attribute">
        <div class="input__with__title">
          <span>Значение(я):</span>
          <div>
            <q-select
              filled
              v-model="size"
              icon
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              placeholder="Выберите значения"
              :options="options"
              @filter="filterFn"
              style="width: 100%; padding-bottom: 32px"
              color="green"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                     Нету такого бренда
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>
        <q-checkbox
          style="margin: 26px 0"
          dense
          v-model="showOnPageAttribute"
          color="green"
          size="48px"
          checked-icon="radio_button_checked"
          unchecked-icon="radio_button_unchecked"
          indeterminate-icon="help"
          label="Отображение на странице товара"
        />
        <default-button
          @click.prevent="removeAttributeItem(listItem.id)"
          style="width: 96px; background-color: red; gap: 4px"
          >Удалить
          <img src="/images/ri-delete-bin-7-line.svg" alt="bin" />
        </default-button>
      </div>
    </q-card>
  </q-expansion-item>
</template>

<script>
import { ref } from "@vue/reactivity";
import DefaultButton from "./DefaultButton.vue";
import SearchInput from "./SearchInput.vue";
import { mapMutations } from "vuex";
export default {
  components: { DefaultButton, SearchInput },
  props: {
    listItem: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const stringOptions = [`xxl`,`xxs`];
    const options = ref(stringOptions);
    return {
      showOnPageAttribute: ref(false),
      size: ref(null),
      options,

      filterFn(val, update, abort) {
        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
  methods: {
    ...mapMutations({
      removeAttributeItem: "productDataWindow/removeAttributeItem",
    }),
  },
};
</script>

<style scoped>
.individual__attribute {
  padding: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>
