<script>
import { Line, Doughnut, renderChart } from './BaseChart'
import { reactiveProp } from './minxins'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Chart',
  extends: Line,
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
    },
  },
  mounted() {
    // renderChart(this.chartdata, this.chartOptions)
    this.renderChart(this.chartData, this.chartOptions)
  }
})
</script>
