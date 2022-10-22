<template>
  <div>
    <input type="file" id="file" accept="image/*,.pdf" />
    <label for="file">
      <h1 v-if="placeholder.title">{{placeholder.title}}</h1>
      <img :src="iconSrc" alt="iconSrc" />
      <h2 v-if="placeholder.body">
        {{placeholder.body}}
      </h2>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: Object,
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
h1 {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
}
h2 {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}
input[type="file"] {
  display: none;
}
label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: var(--bg-statistic);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--light-color-72);
  padding: 32px 16px;
  border: 1px solid var(--recent-item-border);
  gap: 40px;
}
div {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
}
span {
  color: var(--text-ui);
}
</style>
