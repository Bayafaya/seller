<template>
  <div v-if="$store.state.profile.profileWindow === 1">
    <div class="profile container">
      <div class="profile__header">
        <h3>Профиль</h3>
        <div class="logout">
          <h6>Выйти из системы</h6>
          <img v-if="!this.$q.dark.isActive" src="/images/SideBarLight/ri-logout-box-r-line.svg" alt="logout" />
          <img v-else src="/images/SideBarDark/ri-logout-box-r-line.svg" alt="logout" />
        </div>
      </div>
      <div class="container avatar__block">
        <img src="/images/Avatar.png" alt="Avatar" />
        <h4>Кайрат Талатович</h4>
      </div>
    </div>
    <div class="card__bar container">
      <store-card @click="changePage(2)"/>
      <stop-market-card @click="changePage(3)"/>
      <language-card />
    </div>
  </div>
  <edit-store v-else-if="$store.state.profile.profileWindow === 2"/>
  <vocation-store v-else-if="$store.state.profile.profileWindow === 3"/>
</template>

<script>
import StoreCard from "../components/StoreCard.vue";
import StopMarketCard from "../components/StopMarketCard.vue";
import LanguageCard from "../components/LanguageCard.vue";
import EditStore from "../components/EditStore.vue";
import VocationStore from "../components/VocationStore.vue";
import {mapMutations} from 'vuex';

export default {
  data() {
    return {};
  },
  components: { StoreCard, StopMarketCard, LanguageCard, EditStore, VocationStore },
  methods:{
        ...mapMutations({
            changePage:'profile/changePage',
        }),
    },
};
</script>

<style scoped>
.profile {
  padding: 48px 0;
  border-bottom: 1px solid var(--recent-item-border);
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
.card__bar {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 224px;
  grid-column-gap: 8px;
  padding: 48px 0 0 0;
}
</style>
