<template>
  <select name="product__filter">
    <option disabled selected value="">Выберите из списка</option>
    <option :key="option" v-for="option in options" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background-image: url(../../images/downselect.svg);
  background-repeat: no-repeat;
  background-position: calc(100% - 3px) center;
  background-size: 24px;
  background-color: var(--bg-statistic);
  border: none;
  border-bottom: 1px solid var(--border-of-stats);
  outline: 0px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 12px 20px 12px 12px;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;
  color: var(--text-ui);
}
option {
  color: black;
}
select#xyz {
  border: none;
}
</style>
