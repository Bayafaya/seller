<template>
  <all-stat />
  <div class="container">
    <h4>Последние продажи</h4>
    <div class="title__of__list"><h5>Номер заказа</h5> <h6>Статус</h6> <h6>Прибыль</h6></div>
    <recent-sales-item :itemData="itemData"/>
    <recent-sales-item :itemData="itemData"/>
    <recent-sales-item :itemData="itemData"/>
    <recent-sales-item :itemData="itemData"/>
    <recent-sales-item :itemData="itemData"/>
    <recent-sales-item :itemData="itemData"/>
    <recent-sales-item :itemData="itemData"/>
  </div>
</template>

<script>
import AllStat from "../components/statistics/AllStat.vue";
import RecentSalesItem from "../components/RecentSalesItem.vue";

export default {
 
  components: { AllStat, RecentSalesItem },
  data() {
    return {
      itemData: {
        id: 16368,
        status: "В ожидании",
        price: 120.5,
      },
      productData: {
        id: 16368,
        showImg: true,
        check: false,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        status: "В ожидании",
        count: 1500,
        price: 120.5,
      },
      productDescriptionData: {
        id: 16368,
        showImg: true,
        check: false,
        name: "Кофе молотый Tchibo Gold Selection, 250 г",
        status: "В ожидании",
        count: 1500,
        price: 120.5,
        description: "Отличный, крепкий и насыщенный! Самое то, для начала дня",
      },
      dataAboutInput: {
        price: false,
        icon: true,
      },
    };
  },
};
</script>

<style scoped>
  .title__of__list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    margin-top: 16px;
    border-bottom: 1px solid var(--recent-item-border);
  }
</style>
