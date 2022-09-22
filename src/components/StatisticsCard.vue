<template>
    <div class="statistics">
      <div class="statistics__top">
        <h6>{{info.title}}</h6>
        <img :src=info.link alt="Vector" />
      </div>
      <div class="statistics__bottom">
        <h3>{{info.price}}</h3>
        <h5>-{{info.discount}}%</h5>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props:{
      info:{
        type:Object,
        required:true,
      },
    
    }
  };
  </script>
  
  <style scoped>
  .statistics {
    display: flex;
    flex-direction: column;
  }
  .statistics__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 24px 70px 24px;
  }
  .statistics__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
  }
  </style>
  