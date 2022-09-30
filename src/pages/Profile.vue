<template>
  <div class="profile container">
    <div class="profile__header">
      <h3>Профиль</h3>
      <div class="logout">
        <h6>Выйти из системы</h6>
        <img src="../images/ri-logout-box-r-line.svg" alt="logout" />
      </div>
    </div>
    <div class="container avatar__block">
      <img src="../images/Avatar.png" alt="Avatar" />
      <h4>Кайрат Талатович</h4>
    </div>
  </div>
      <div class="card__bar container">
      <store-card />
      <stop-market-card />
      <language-card />
    </div>
</template>

<script>
import StoreCard from "../components/StoreCard.vue";
import StopMarketCard from "../components/StopMarketCard.vue";
import LanguageCard from "../components/LanguageCard.vue";
export default {
  data() {
    return {
      
    };
  },
  components: { StoreCard, StopMarketCard, LanguageCard },
};
</script>

<style scoped>
.profile {
  padding: 48px 0;
  border-bottom: 1px solid var(--light-color-8);
}
.profile__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.logout {
  display: flex;
  align-items: center;
  column-gap: 12px;
  cursor: pointer;
}
.avatar__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  row-gap: 16px;
}
.avatar__block img {
  height: 120px;
}
.card__bar{
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 224px;
  grid-column-gap: 8px;
  padding: 48px 0 0 0;
}
</style>
