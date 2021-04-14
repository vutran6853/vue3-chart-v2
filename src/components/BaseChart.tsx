import Chart from 'chart.js'
import { defineComponent, h, reactive } from 'vue'

// interface IBaseChart {
//   width: number,
//   height: number,
//   chartObj: any,
//   chartType: any
// }

interface IBaseChart {
  state: {
    chartObj?: Chart | null
  }
}

type IBaseChartProps = {
  chartId: string
  chartType: string
  width: number
  height: number
  cssClasses: string
  styles: string
  plugins: any[]
}

interface IState {
  myName: string
  userData: {}
  userOptions: {}
}

function useChartInfo() {
  const state: IState = reactive({
    myName: '',
    userData: {},
    userOptions: {}
  })

  function setChartData(payload: {}) {
    state.userData = payload
  }

  function setChartOption(payload: {}) {
    state.userOptions = payload
  }

  return {
    state,
    setChartData,
    setChartOption
  }
}

/**
 *
 * @param chartsId string
 * @param chartsType string
 */
function generateChart(chartsId: string, chartsType: string) {
  let { state, setChartData, setChartOption } = useChartInfo()

  return defineComponent({
    name: 'BaseChart',
    props: {
      chartId: {
        type: String,
        required: false
      },
      chartType: {
        type: String,
        required: false
      },
      width: {
        type: Number,
        required: false
        // default: 400
      },
      height: {
        type: Number,
        required: false
        // default: 400
      },
      cssClasses: {
        type: String,
        required: false,
        default: ''
      },
      styles: {
        type: Object,
        required: false
      }
    },
    data(): IBaseChart {
      return {
        state: {
          chartObj: null
        }
      }
    },
    // emits: ['chart:update'],

    beforeUnmount() {
      if (this.state.chartObj) {
        this.state.chartObj.destroy()
      }
    },
    methods: {
      renderChart(userData: any, userOptions: any) {
        setChartData(userData)
        setChartOption(userOptions)
        if (this.state.chartObj) {
          // this.state.chartObj.destroy()
          // setChartData({})
          // setChartOption({})
        }
        // if (!this.$refs.canvas) {
        //   throw new Error('Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components')
        // }

        // REMOVE OLD DATA FIRST BEFORE UPDATE.
        if (this.state.chartObj != null && this.state.chartObj.data != null) { 
          if (this.state.chartObj.data.datasets) {
            this.state.chartObj.data.datasets.pop()
          }
        }

        let ctx = (this as any).$refs.canvas.getContext('2d')
        this.state.chartObj = new Chart(ctx, {
          type: chartsType,
          data: userData,
          options: userOptions
          // plugins: this.$data._plugins
        })
        this.state.chartObj.update()
      }
    },
    beforeMount() {
      if ((document as any).getElementById(chartsId)) {
        let ctx = (document as any).getElementById(chartsId).getContext('2d')
        this.state.chartObj = new Chart(ctx, {
          type: chartsType,
          data: {
            datasets: [
              {
                data: [1, 2, 3, 4],
                backgroundColor: ['Red', 'Yellow', 'Blue', 'Green']
              }
            ],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: ['Red', 'Yellow', 'Blue', 'Green']
          },
          options: {
            responsive: false
          }
          // options: this.options,
          // plugins: this.$data._plugins
        })
        this.state.chartObj.update()
      }
    },
    computed: {
      currentChartData(): any {
        return state.userData
      },
      currentChartOption(): any {
        return state.userOptions
      }
    },
    watch: {
      chartData(prevState, newState) {
        if (prevState !== newState) {
          this.renderChart(newState, this.currentChartOption)
        }
      }
    },
    render() {
      return (
        <div class={this.styles}>
          <canvas ref="canvas" id={chartsId} width={(this as any).width} height={(this as any).height}></canvas>
        </div>
      )
    }
  })
}

const Bar = generateChart('bar-chart', 'bar')
const Bubble = generateChart('bubble-chart', 'bubble')
const Doughnut = generateChart('doughnut-chart', 'doughnut')
const HorizontalBar = generateChart('horizontalbar-chart', 'horizontalBar')
const Line = generateChart('line-chart', 'line')
const Pie = generateChart('pie-chart', 'pie')
const PolarArea = generateChart('polar-chart', 'polarArea')
const Radar = generateChart('radar-chart', 'radar')
const Scatter = generateChart('scatter-chart', 'scatter')

export {
  Bar,
  Bubble,
  Doughnut,
  HorizontalBar,
  Line,
  Pie,
  PolarArea,
  Radar,
  Scatter,
  generateChart
  // renderChart
}
