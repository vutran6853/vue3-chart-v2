<script>
import { Bar, Pie, Doughnut, renderChart, Line } from './BaseChart'
import { reactiveProp } from './minxins'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Chart',
  extends: Pie,
  // mixins: [reactiveProp],
  // data () {
  //   return {
  //     // chartData: {
  //     //   labels: ['January', 'February'],
  //     //   datasets: [
  //     //     {
  //     //       label: 'Data One',
  //     //       backgroundColor: '#f87979',
  //     //       data: [40, 20]
  //     //     }
  //     //   ]
  //     // },
  //     chartOptions: {
  //       responsive: true,
  //       maintainAspectRatio: false
  //     }
  //   }
  // },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    }
  },
  mounted() {
    // renderChart(this.chartdata, this.chartOptions)
    this.renderChart(this.chartData, this.chartOptions)
  }
})
</script>
