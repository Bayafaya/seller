<template>
  <div class="search__bar container">
    <h3>Товары</h3>
    <search-input :dataAboutInput="inputData" />
    <div class="add__product">
      <h5>Добавить товар</h5>
      <div><img src="../images/plus.svg" alt="plus" /></div>
    </div>
  </div>
  <div class="products__bar container">
    <div class="filter__bar">
      <h5>Сортировка</h5>
      <my-select />
    </div>
    <div class="product__list" v-if="itemDatas.length > 0">
      <product-item :key="itemData.name" v-for="itemData in itemDatas" :itemData="itemData"/>
    </div>
    <div class="product__list__null" v-else><img src="../images/open-box.svg" alt="No Products"> <h6>Нет товара</h6></div>
  </div>
</template>

<script>
import SearchInput from "../components/Ui/SearchInput.vue";
import MySelect from "../components/Ui/MySelect.vue";
import ProductItem from "../components/ProductItem.vue";
// import 'quasar/dist/quasar.css'
export default {
  components: { SearchInput, MySelect, ProductItem },
  data() {
    return {
      inputData: {
        icon: true,
        price: false,
        placeholder: "Поиск товара",
      },
      options: ["по названию", "по цене (убывание)", "по цене (возростание)"],
      itemDatas:[
        {
        showImg:false,
        check:false,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        price:217,
        count:15000,
      }, {
        showImg:false,
        check:false,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        price:217,
        count:15000,
      },
      {
        showImg:false,
        check:false,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        price:217,
        count:15000,
      },
      {
        showImg:false,
        check:false,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        price:217,
        count:15000,
      },
      {
        showImg:false,
        check:false,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        price:217,
        count:15000,
      },
      {
        showImg:false,
        check:false,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        price:217,
        count:15000,
      },
    ]
    };
  },
};
</script>

<style scoped>
.search__bar {
  display: grid;
  grid-template-columns: 360px auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "product none"
    "search addproduct";
  grid-row-gap: 32px;
  justify-content: space-between;
  padding: 44px 0;
  border-bottom: 1px solid var(--light-color-8);
}
.search__bar h3:nth-child(1) {
  grid-area: product;
}
.search__bar div:nth-child(2) {
  grid-area: search;
}
.search__bar div:nth-child(3) {
  grid-area: addproduct;
}
.add__product {
  display: flex;
  align-items: center;
  column-gap: 16px;
}
.filter__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--light-color-8);
}
.product__list__null{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
}

</style>
