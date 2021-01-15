import Chart from 'chart.js'
import { defineComponent, Fragment, h } from 'vue'

/**
 * 
 * @param chartsId string
 * @param chartsType string
 */
function generateChart(chartsId, chartsType) {

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
    data() {
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
      renderChart (userData, userOptions ) {
        if (this.state.chartObj) {
          this.state.chartObj.destroy()
        }
        // if (!this.$refs.canvas) {
        //   throw new Error('Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components')
        // }
        let ctx = (this).$refs.canvas.getContext('2d')
        this.state.chartObj = new Chart(ctx, {
          type: chartsType,
          data: userData,
          options: userOptions,
          // plugins: this.$data._plugins
        })
      },
    },
    beforeMount() {
      if ((document).getElementById(chartsId)) {
        let ctx = (document).getElementById(chartsId).getContext('2d')
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
      return h('canvas', {
        ref: 'canvas',
        id: this.chartId,
        width: this.width,
        height: this.height
      })
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
