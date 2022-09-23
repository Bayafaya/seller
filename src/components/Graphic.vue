<template>
    <div class="chart">
          <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
    </div>

</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 665,
    },
    height: {
      type: Number,
      default: 408
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'Неделя 1', 'Неделя 2', 'Неделя 3', 'Неделя 4', 'Неделя 5' , 'Неделя 6'   ],
        datasets: [ { data: [40, 20, 12,40, 20, 12], backgroundColor: 'rgba(0, 200, 68, 1)', }, ],
       
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style scoped>
.chart{
    height: 408px;
    width: 665px;
}
</style>
