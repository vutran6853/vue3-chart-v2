import Chart from 'chart.js'
import { defineComponent, Fragment } from 'vue'

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

/**
 * 
 * @param chartsId string
 * @param chartsType string
 */
function generateChart(chartsId: string, chartsType: string) {

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
        required: false,
        default: 400
      },
      height: {
        type: Number,
        required: false,
        default: 400
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
      renderChart (userData: any, userOptions: any ) {
        if (this.state.chartObj) {
          this.state.chartObj.destroy()
        }
        // if (!this.$refs.canvas) {
        //   throw new Error('Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components')
        // }
        let ctx = (this as any).$refs.canvas.getContext('2d')
        this.state.chartObj = new Chart(ctx, {
          type: chartsType,
          data: userData,
          options: userOptions,
          // plugins: this.$data._plugins
        })
      },
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
      }
    },
    render() {
      return (
        <Fragment>
          <canvas ref="canvas" id={chartsId} width={(this as any).width} height={(this as any).height}></canvas>
        </Fragment>
      )
    }
  })
}

const Bar = generateChart('bar-chart', 'Bar')
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
