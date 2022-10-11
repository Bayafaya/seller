<template>
  <div class="input">
    <img v-if="dataAboutInput.icon" src="../../images/search.svg" alt="search">
    <input v-if="!dataAboutInput.price" :placeholder="dataAboutInput.placeholder" required type="text">
    <input v-else placeholder="0" type="number">
    <h5 v-if="dataAboutInput.price">c</h5>
  </div>
</template>

<script>
export default {
props:{
  dataAboutInput:{
    type:Object,
    required:false,
  }
}
}
</script>

<style scoped>
.input{
  display: flex;
  align-items: center;
  background: var(--bg-statistic);
  padding: 12px;
  border-bottom: 1px solid var(--border-of-stats);
}
.input img{
 margin-right: 10px;
}
.input input{ 
 background: transparent;
 border: none;
 font-size: 16px;
 line-height: 24px;
 color: var(--text-ui);
 width: 100%;
}
.input input:focus-visible{ 
  color: var(--hover-ui);
  outline: none;
}
.input:focus-within {
  border-bottom: 2px solid var(--primary-color);
}
.input:hover{
  border-bottom: 1px solid var(--hover-ui);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


input[type=number] {
  -moz-appearance: textfield;
}
</style>