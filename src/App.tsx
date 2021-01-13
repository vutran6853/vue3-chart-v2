import { defineComponent } from 'vue'
import { Pie, Doughnut, Bubble, Line } from './components/BaseChart'
import Chart from './components/Chart.vue'
import RandomChart from './components/RandomChart.vue'

export default defineComponent({
  name: 'App',
  render() {
    return (
      <div>
        <h1>app tsx</h1>
        <Line />
        {/* <Chart  /> */}
        {/* <RandomChart /> */}
      </div>
    )
  }
})
