<template>
    <select name="product__filter" id="product__filter" @click="selectClick">
    <option value="название"> По названию</option>
    <option value="убывание">По Цене (по убыванию)</option>
    <option value="возрастанию">По Цене (по возрастанию)</option>
    </select>
</template>

<script>
export default {
methods:{
    selectClick(e){
    
    }
}
}
</script>

<style scoped>
select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    background-image: url(../../images/downselect.svg);
    background-repeat: no-repeat;
    background-position: calc(100% - 3px) center;
    background-size: 24px;
    border: 0px;
    outline:0px;
    background-color:transparent;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding: 12px 20px 12px 12px;
    overflow: hidden;
    scroll-behavior: smooth;
}

select#xyz {
  border: none;
}

</style>