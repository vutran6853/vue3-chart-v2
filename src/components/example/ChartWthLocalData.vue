<script>
import { Pie, Doughnut, renderChart } from './BaseChart'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Chart',
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    // renderChart(this.chartData, this.options)
    this.renderChart(this.chartData, this.chartOptions)
  }
})
</script>
