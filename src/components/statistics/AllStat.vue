<template>
  <div class="statistic__background">
    <div class="container statistic">
      <statistics-card :info="cardInfo" />
      <statistics-card :info="cardInfoS" />
      <graphic />
        
    </div>
  </div>
</template>

<script>
import Graphic from './Graphic.vue';
import StatisticsCard from './StatisticsCard.vue';

export default {
  components: { StatisticsCard,Graphic },

data(){
    return{
        cardInfo: {
        title: "Прибыль",
        link: "src/images/graphStat.svg",
        price: "2504",
        discount: 30,
      },
      cardInfoS: {
        title: "Валовые продажи",
        link: "src/images/ri-pie-chart-2-line.svg",
        price: "154 204",
        discount: 30,
      },
    }
}
};
</script>

<style scoped>
.statistic {
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 204px 204px;
  grid-template-areas:
    "profit stat"
    "sales stat";
  background: var(--dark-color);
}
.statistic div:nth-child(1) {
  grid-area: profit;
  border-bottom: 1px solid var(--light-color-4);
}
.statistic div:nth-child(2) {
  grid-area: sales;
}
.statistic div:nth-child(3) {
  grid-area: stat;
  border-left: 1px solid var(--light-color-4);
}
.statistic__background {
  width: 100%;
  background: var(--light-color-4);
  padding: 48px 0;
  margin-bottom: 48px;
}

</style>
