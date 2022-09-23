<template>
  <!-- <statistics-card :info="cardInfo" />
  <recent-sales-item :itemData="itemData" />
  <recent-sales-item :itemData="itemData" />
  <product-item :itemData="productData" />
  <product-with-description :itemData="productDescriptionData" />
  <search-input :dataAboutInput="dataAboutInput" />
  <default-button><h5>Текст</h5></default-button>
  <phone-number-input /> -->
   <graphic/>
</template>

<script>
import StatisticsCard from "../components/StatisticsCard.vue";
import RecentSalesItem from "../components/RecentSalesItem.vue";
import ProductItem from "../components/ProductItem.vue";
import ProductWithDescription from "../components/ProductWithDescription.vue";
import SearchInput from "../components/Ui/SearchInput.vue";
import DefaultButton from "../components/Ui/DefaultButton.vue";
import PhoneNumberInput from "../components/Ui/PhoneNumberInput.vue";
import Graphic from "../components/Graphic.vue";

export default {
  data() {
    return {
      cardInfo: {
        title: "Прибыль",
        link: "src/images/graphStat.svg",
        price: 2504.0,
        discount: 30,
      },
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
  components: {
    StatisticsCard,
    RecentSalesItem,
    ProductItem,
    ProductWithDescription,
    SearchInput,
    DefaultButton,
    PhoneNumberInput,
    Graphic
},
};
</script>

<style scoped></style>
