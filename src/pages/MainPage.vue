<template>
  <statistics-card
    :info="cardInfo"
  />
  <recent-sales-item :itemData="itemData"/>
  <recent-sales-item :itemData="itemData"/>
  <product-item :itemData="ProductData"/>
</template>

<script>
import StatisticsCard from '../components/StatisticsCard.vue';
import RecentSalesItem from '../components/RecentSalesItem.vue';
import ProductItem from '../components/ProductItem.vue';
export default {
  data(){
  return{
    cardInfo:{
      title: "Прибыль",
      link:"src/images/graphStat.svg",
      price:2504.0,
      discount:30,
    },
    itemData:{
      id: 16368,
      status:"В ожидании",
      price:120.500,
    },
    ProductData:{
      id: 16368,
      showImg:true,
      check:false,
      name:"Кофе молотый Tchibo Gold Selection, 250 г",
      status:"В ожидании",
      count: 1500,
      price:120.500,
    },

  }
  },
  components: { StatisticsCard, RecentSalesItem, ProductItem },
};
</script>

<style scoped>
  
</style>
