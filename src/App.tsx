import { defineComponent } from 'vue'
import { Pie, Doughnut, Bubble, Line } from './components/BaseChart'
import Chart from './components/Chart.vue'
import RandomChart from './components/RandomChart.vue'

export default defineComponent({
  name: 'App',
    data (): any {
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
      datacollection: {},
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  beforeMount () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, 
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  render() {
    return (
      <div>
        {/* <h1>app tsx</h1> */}
        {/* <Line /> */}
        <Chart chartData={this.datacollection} />
        <button onClick={this.fillData}>Randomize</button>
      </div>
    )
  }
})
