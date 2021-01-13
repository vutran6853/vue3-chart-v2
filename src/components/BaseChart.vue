<script lang="tsx">
import Chart from 'chart.js'
import {
  ComponentOptions,
  ComponentOptionsWithObjectProps,
  DefineComponent,
  defineComponent,
  onBeforeMount,
  onMounted,
  PropType,
  reactive
} from 'vue'

// function BaseChart() {
//   return (
//     <div>
//       BaseChart Components
//       {/* <canvas ref="canvas" width="400" height="400"></canvas> */}
//     </div>
//   )
// }

// interface IBaseChart {
//   width: number,
//   height: number,
//   localChartData: any,
//   chartType: any
// }
interface IBaseChart {
  state: {
    localChartData: any
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

// function BaseChart(props: any) {
//   let width = 400
//   let height = 400

//   onMounted(function () {
//     console.log('ENTER onMounted')
//   })

//   return (
//     <div>
//       <h1>BaseChart Components function</h1>
//       <canvas ref="canvas" id="myChart" width={width} height={height}></canvas>
//     </div>
//   )
// }

export default defineComponent({
  name: 'BaseChart',
  data(): IBaseChart {
    return {
      state: {
        localChartData: null
      }
    }
  },
  props: {
    chartId: {
      type: String as PropType<''>,
      required: true
      // default: 'myChart',
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
    },
    plugins: {
      type: Array,
      required: false,
      default() {
        return []
      }
    }
  },
  methods: {
    handleGenerateLegend() {
      if (this.state.localChartData) {
        // return this.state.localChartData.generateLegend()
      }
    }
  },
  // setup (props) {
  //   console.log({props})
  //   return function () {
  //     return (
  //       <div>
  //         BaseChart Components
  //         {/* <canvas ref="canvas" width="400" height="400"></canvas> */}
  //       </div>
  //     )
  //   }
  // },
  mounted() {
    if ((document as any).getElementById('myChart')) {
      let ctx = (document as any).getElementById('myChart').getContext('2d')

      this.state.localChartData = new Chart(ctx, {
        type: 'pie',
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
    // console.log(this)

    // console.log((this as any).chartId)
    // if (this.state.localChartData) {

    // }

    // if (this.$refs.canvas) {
    //   throw new Error('Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components')
    // }

    // if ((document as any).getElementById('myChart')) {
    //   let ctx = (document as any).getElementById('myChart').getContext('2d')

    //   this.state.localChartData = new Chart(ctx, {
    //       type: 'pie',
    //       data: {
    //         datasets: [
    //           {
    //             data: [1, 2, 3, 4],
    //             backgroundColor: ['Red', 'Yellow', 'Blue', 'Green']
    //           }
    //         ],
    //         // These labels appear in the legend and in the tooltips when hovering different arcs
    //         labels: ['Red', 'Yellow', 'Blue', 'Green']
    //       },
    //       options: {
    //         responsive: false
    //       },
    //       // options: this.options,
    //       // plugins: this.$data._plugins
    //     }
    //   )

    // }

    return (
      <div>
        <h1>BaseChart Components tsxsss</h1>
        <canvas ref="canvas" id="myChart" width={(this as any).width} height={(this as any).height}></canvas>
      </div>
    )
  }
})
</script>
