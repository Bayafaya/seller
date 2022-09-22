<template>
  <div class="recent__sales__item">
    <h5>{{ itemData.id }}</h5>
    <h5>{{ itemData.status }}</h5>
    <h5>{{ itemData.price }} c</h5>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.recent__sales__item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-color-8);
  border-right: 1px solid transparent;
  padding: 24px 0;
  color: var(--light-color-48);
}
.recent__sales__item:hover {
  border-right: 4px solid var(--primary-color);
  background: var(--light-color-4);
  padding: 24px 24px;
  transition: 0.5s;
  color: var(--light-color);
}
/* @media (max-width: 792px) {
  .recent__sales__item h5 {
    font-size: 14px;
    line-height: 20px;
  }
  .recent__sales__item:hover {
    padding: 24px 16px;
  }
}
@media (max-width: 408px) {
  .recent__sales__item h5 {
    font-size: 12px;
    line-height: 16px;
  }
} */
</style>
