<template>
  <div class="product_item">
    <div class="product_item__title">
      <div v-if="itemData.showImg">
        <div v-if="itemData.check">
          <img src="../images/checked.svg" alt="checked" />
        </div>
        <div v-else>
          <img src="../images/promise.svg" alt="checked" />
        </div>
      </div>
      <div class="icon">
        <img src="../images/productcofe.png" alt="productcofe" />
      </div>
      <h5>{{ itemData.name }}</h5>
    </div>
    <h5>{{ itemData.price }} c</h5>
    <h5>Скалд: <b>{{ itemData.count }} c</b></h5>
    <h6 class="edit">Открыть</h6>
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
.product_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-color-8);
  border-right: 1px solid transparent;
  padding: 24px 0;
}

.product_item h5 {
  font-weight: 500;
}
.icon {
  width: 56px;
  height: 56px;
  background: var(--dark-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 16px;
}
.icon img {
  height: 100%;
}
.product_item h5:nth-child(3) b {
  color: var(--light-color-48);
}
.product_item__title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.product_item:hover {
  border-right: 4px solid var(--primary-color);
  background: var(--light-color-4);
  padding: 24px 24px;
  transition: 0.5s;
  color: var(--light-color);
}
.edit {
  background: var(--primary-color-8);
  color: var(--primary-color);
  border-radius: 28px;
  font-weight: 500;
  padding: 4px 12px;
}
</style>
