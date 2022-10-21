<template>
  <div class="progress__bar">
    <div class="progress__scale" :style="{'width':progress}">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    progress:{
      type:String,
      required:true,
    }
  }

}
</script>

<style>
.progress__bar{
background: var(--bg-statistic);
height: 4px;
}
.progress__scale{
background: var(--primary-color);
transition: 1s;
height: 4px;
}
</style>