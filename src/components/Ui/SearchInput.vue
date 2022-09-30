<template>
  <div class="input">
    <div v-if="dataAboutInput.icon"><img src="../../images/search.svg" alt="search"></div>
    <input v-if="!dataAboutInput.price" :placeholder="dataAboutInput.placeholder" type="text">
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
  background: var(--light-color-4);
  padding: 12px;
  border-bottom: 1px solid var(--light-color-8);
}
.input img{
 margin-right: 10px;
}
.input input{ 
 background: transparent;
 border: none;
 font-size: 16px;
 line-height: 24px;
 color: var(--light-color-72);
 width: 100%;
}
.input input:focus-visible{ 
  color: var(--light-color);
  outline: none;
}
.input:focus-within {
  border-bottom: 2px solid var(--primary-color);
}
.input:hover{
  border-bottom: 1px solid var(--light-color);
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