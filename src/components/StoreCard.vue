<template>
  <div class="card">
    <div class="icon__card icon-head"></div>
    <div class="card__footer">
      <h5>Посетить магазин</h5>
      <div class="icon__card icon-foot"></div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.card {
  background: var(--bg-statistic);
  min-height: 152px;
  padding: 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: 0.3s;
}
.icon__card {
  background-size: cover;
  transition: 0.5s;
  background-repeat: no-repeat;
  background-position: center;
}

.card:hover {
  background: var(--primary-color);
  color: var(--dark-color);
}
.icon-head {
  background-image: var(--card-store-url);
  width: 32px;
  height: 32px;
}
.card:hover .icon-head,
.card:focus .icon-head{
  background-image: url("../images/ri-store-line-white.svg");
}
.card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon-foot {
  background-image: var(--card-arrow-url);
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
}
.card:hover .icon-foot,
.card:focus .icon-foot{
  background-image: url("../images/ri-arrow-right-s-fill-white.svg");
}

</style>
