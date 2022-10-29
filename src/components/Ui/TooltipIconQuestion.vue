<template>
   <div class="tooltip">
    <span>{{ textForTooltip }}</span>
    </div>
</template>

<script>
export default {
    props:{
        textForTooltip:{
            type:String,
            required:false,
        }
    }
}
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  height: 24px;
  width: 24px;
  background-image: url("src/images/ri-question-fill.svg");
  color: var(--primary-color);
  cursor: pointer;
}
.tooltip span {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip span::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover span {
  visibility: visible;
  opacity: 1;
}
</style>