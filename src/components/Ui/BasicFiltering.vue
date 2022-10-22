<template>
    <q-select
      filled
      v-model="model"
      icon
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      placeholder="Выберите страну"
      :options="options"
      @filter="filterFn"
      style="width: 100%; padding-bottom: 32px"
      color="green"
    >
        <template v-slot:prepend>
            <img src="../../images/search.svg" alt="search">
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> Нету такой страны </q-item-section>
        </q-item>
      </template>
    </q-select>
</template>

<script>
import { ref } from "vue";

const stringOptions = ["Азербайджан", "Армения", "Белоруссия", "Казахстан", "Кыргызстан","Молдавия","Россия","Таджикистан","Узбекистан"];

export default {
  setup() {
    const options = ref(stringOptions);

    return {
      model: ref(null),
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
};
</script>
<style scoped>

</style>
