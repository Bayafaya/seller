<template>
  <div v-for="title in titles" :key="title">
    <input type="radio" :id="title" :name="group" />
    <label :for="title">
      <h6>{{ title }}</h6>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
div{
  width: 100%;
}
h6 {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 0 0 16px 16px;
}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label {
  background: var(--primary-color-8);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  background-image: url(src/images/ri-checkbox-circle-fill.svg);
  background-position: top 18px left 18px;
  background-repeat: no-repeat;
}
label {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--recent-item-border);
  height: 120px;
  cursor: pointer;
  background-color: var(--background-hover-recent);
  background-image: url(src/images/ri-checkbox-blank-circle-line.svg);
  background-position: top 18px left 18px;
  background-repeat: no-repeat;
  justify-content: end;
}
</style>
