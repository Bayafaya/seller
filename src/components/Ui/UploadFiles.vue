<template>
  <div>
    <input type="file" id="file" accept="image/*" />
    <span>Логотип магазина</span>
    <label for="file">
      <img :src="iconSrc" alt="iconSrc" />{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    iconSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
input[type="file"] {
  display: none;
}
label{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: var(--bg-statistic);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--light-color-72);
  padding: 48px;
  border: 1px dashed var(--recent-item-border);
  column-gap: 8px;
}
div{
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
span{
  color: var(--text-ui);
}
</style>
