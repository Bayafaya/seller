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

<style>
.recent__sales__item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--recent-item-border);
  border-right: 1px solid transparent;
  padding: 24px 0;
  color: var(--recent-item);
}

.recent__sales__item:hover {
  border-right: 4px solid var(--primary-color);
  background: var(--background-hover-recent);
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
