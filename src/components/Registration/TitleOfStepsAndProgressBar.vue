<template>
     <div class="title__of__steps__and__progress__bar">
        <h4>{{titleAndProgress.title}}</h4>
        <progress-bar :progress="titleAndProgress.percent"/>
      </div>
</template>

<script>
import ProgressBar from '../Ui/ProgressBar.vue'
export default {
  components: { ProgressBar },
    props:{
        titleAndProgress:{
            type:Object,
            required:true,
        }
    }
}
</script>

<style scoped>
.title__of__steps__and__progress__bar{
    padding-bottom: 64px;
}
.title__of__steps__and__progress__bar h4{
  margin-bottom: 24px;
}
</style>