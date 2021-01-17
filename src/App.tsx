import { defineComponent, VNode } from 'vue'
// import { Pie, Doughnut, Bubble, Line } from './components/BaseChart'
import Chart from './components/Chart.vue'
// import RandomChart from './components/RandomChart.vue'

interface IAppState {
  chartData: {
    labels?: string[]
    datasets?: [
      {
        label?: string
        backgroundColor?: string
        data?: number[]
      }
    ]
  }
  dataCollection: {}
  chartOptions: {
    responsive?: boolean
    maintainAspectRatio?: boolean
    height?: number
    intersect?: boolean
    hover?: any
    tooltips?: any
    layout?: any
    pointHoverRadius?: any
  }
  height: number
}

export default defineComponent({
  name: 'App',
  data(): IAppState {
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
      dataCollection: {},
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      height: 500
    }
  },
  beforeMount() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.dataCollection = {
        labels: ['Red', 'Blue'],
        datasets: [
          {
            label: 'Data One',
            data: [this.getRandomInt(), this.getRandomInt()],
            backgroundColor: ['red', 'blue'],
            borderColor: ['red', 'blue'],
            borderWidth: 1
          }
        ]
        // labels: [this.getRandomInt(), this.getRandomInt()],
        // datasets: [
        //   {
        //     label: 'Data One',
        //     backgroundColor: '#f87979',
        //     data: [this.getRandomInt(), this.getRandomInt()]
        //   }, {
        //     label: 'Data One',
        //     backgroundColor: '#f87979',
        //     data: [this.getRandomInt(), this.getRandomInt()]
        //   }
        // ]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (20 - 5))
    },
    increase() {
      this.height += 10
    }
  },
  computed: {
    myStyles(): { height?: string; position?: string; border?: string } {
      return {
        height: `${this.height}px`,
        border: `2px solid red`,
        position: 'relative'
      }
    }
  },
  render(): VNode {
    return (
      <div>
        {/* <h1>app tsx</h1> */}
        {/* <Line /> */}
        <Chart chartData={this.dataCollection} chartOptions={this.chartOptions} style={this.myStyles} />
        <button onClick={this.fillData}>Randomize</button>
        <button onClick={this.increase}>Increase height</button>
      </div>
    )
  }
})
