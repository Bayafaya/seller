<template>
    <q-select
      filled
      v-model="model"
      icon
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :placeholder="placeholderTxt"
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
          <q-item-section class="text-grey"> {{noOptionPlaceholder}} </q-item-section>
        </q-item>
      </template>
    </q-select>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props) {
    const stringOptions = props.itemList;
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
  props:{
    itemList:{
      type:Array,
      required:false,
    },
    noOptionPlaceholder:{
      type:String,
      required:true,
    },
    placeholderTxt:{
      type:String,
      required:false,
    }
  },


};
</script>
<style scoped>

</style>
