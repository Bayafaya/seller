<template>
  <div class="dialog" v-if="show">
    <div class="dialog__content">
      <div class="close__dialog">
        <h5>Тип баннера</h5>
        <img src="../images/ri-close-line.svg" alt="close" @click="dialogVisible(false)"/>
      </div>
      <span class="title__of__banners">Выберите тип баннера</span>
      <div class="dialog__cards">
        <div>
          <input type="radio" id="320X200" name="bannerSize" />
          <label for="320X200"
            ><h6>320 X 200 px</h6>
            <img src="../images/320x200.jpg" alt="320x200"
          /></label>
        </div>

        <div>
          <input type="radio" id="320X120" name="bannerSize" />
          <label for="320X120">
            <h6>320 X 120 px</h6>
            <img src="../images/320x120.jpg" alt="320x120"
          /></label>
        </div>

        <div>
          <input type="radio" id="160X80" name="bannerSize" />
          <label for="160X80"
            ><h6>160 X 80 px</h6>
            <img src="../images/160x80.jpg" alt="160x80"
          /></label>
        </div>

        <div>
          <input type="radio" id="720X360" name="bannerSize" />
          <label for="720X360"
            ><h6>720 X 360 px</h6>
            <img src="../images/720x360.jpg" alt="720X360"
          /></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {

props:{
  show:{
    type:Boolean,
    required:true,
  },
},
methods:{
        ...mapMutations({
            dialogVisible:'profile/dialogVisibleChange',
        }),
    },
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background:var(--modal-bg); 
  position: fixed;
  display: flex;
  z-index: 10;
}
.dialog__content {
  width: 616px;
  height: 496px;
  margin: auto auto;
  background: var(--statistic);
}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label {
  background: var(--primary-color-8);
  border: 2px solid var(--primary-color);
  background-image: url(../images/ri-checkbox-circle-fill.svg);
  background-position: top 16px right 16px;
  background-repeat: no-repeat;
}
label {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--recent-item-border);
  height: 160px;
  cursor: pointer;
  background-image: url(../images/ri-checkbox-blank-circle-line.svg);
  background-position: top 16px right 16px;
  background-repeat: no-repeat;
}
label h6 {
  padding: 18px 0 0 16px;
}
label img {
  height: 104px;
  width: 120px;
  margin: auto auto 0 auto;
}
.close__dialog {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-of-stats);
}
.close__dialog h5:nth-child(1) {
  padding-left: 16px;
}
.close__dialog img:nth-child(2) {
  background: var(--primary-color);
  cursor: pointer;
  padding: 16px;
}
.close__dialog img:nth-child(2):hover {
  background: #00b53e;
}
.close__dialog img:nth-child(2):active {
  background: #009533;
}
.dialog__cards{
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-gap: 16px;
  padding: 0 16px;
}
.title__of__banners{
  display: flex;
  color: var(--text-ui);
  padding: 32px 16px 24px;
}
</style>
