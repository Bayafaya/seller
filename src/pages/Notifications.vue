<template>
  <div class="search__bar container">
    <h3>Уведомление</h3>
    <div class="tabs">
      <h5 id=1 class="tabs__item active__tab" @click="changeTabs(1)">Одобренный</h5>
      <h5 id=2 class="tabs__item" @click="changeTabs(2)">В ожидании</h5>
    </div>
  </div>
  <div class="container">
    <div v-if="tabs === 1">
      <product-item :itemData="itemData" />
      <product-item :itemData="itemData" />
      <product-item :itemData="itemData" />
      <product-item :itemData="itemData" />
    </div>
    <div v-if="tabs === 2">
      <product-item :itemData="itemDataSec" />
      <product-item :itemData="itemDataSec" />
      <product-item :itemData="itemDataSec" />
      <product-item :itemData="itemDataSec" />
      <product-item :itemData="itemDataSec" />
      <product-item :itemData="itemDataSec" />
    </div>
  </div>
</template>

<script>
import MySelect from "../components/Ui/MySelect.vue";
import ProductItem from "../components/ProductItem.vue";
export default {
  components: { MySelect, ProductItem },
  data() {
    return {
      itemData: {
        showImg: true,
        check: true,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        price: 217,
        count: 15000,
        description: "Отличный, крепкий и насыщенный! Самое то, для начала дня",
      },
      itemDataSec: {
        showImg: true,
        check: false,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        price: 217,
        count: 15000,
        description: "Отличный, крепкий и насыщенный! Самое то, для начала дня",
      },
      tabs:1,
    };
  },
  methods:{
    changeTabs(tabState){
      const activeTabs = document.getElementsByClassName('active__tab')
      for (let index = 0; index < activeTabs.length; index++) {
        const element = activeTabs[index];
        element.classList.remove('active__tab');
      }
      document.getElementById(tabState).classList.add('active__tab');   
      this.tabs = tabState;
    }
  }
};
</script>

<style scoped>
.search__bar {
  display: flex;
  flex-direction: column;
  padding: 48px 0 0 0;
  row-gap: 32px;
  border-bottom: 1px solid var(--light-color-8);
}
.tabs {
  display: flex;
  column-gap: 24px;
  align-items: center;
}
.tabs__item{
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: 0.3s;
  padding: 24px 0;
}
.active__tab{
  border-bottom: 2px solid var(--primary-color);
}
.tabs__item:hover {
  border-bottom: 2px solid var(--primary-color);
}
</style>
