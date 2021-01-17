import { defineComponent } from 'vue'

function dataHandler(this: { chartData: (newData: any, oldData: any) => void }, newData: any, oldData: any) {
  if (oldData) {
    let chart = (this as any).chartData
    // Get new and old DataSet Labels
    let newDatasetLabels = newData.datasets.map((dataset: any) => {
      return dataset.label
    })

    let oldDatasetLabels = oldData.datasets.map((dataset: any) => {
      return dataset.label
    })

    // Stringify 'em for easier compare
    const oldLabels = JSON.stringify(oldDatasetLabels)
    const newLabels = JSON.stringify(newDatasetLabels)

    // Check if Labels are equal and if dataset length is equal
    if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
      newData.datasets.forEach((dataset: any, index: any) => {
        // Get new and old dataset keys
        const oldDatasetKeys = Object.keys(oldData.datasets[index])
        const newDatasetKeys = Object.keys(dataset)

        // Get keys that aren't present in the new data
        const deletionKeys = oldDatasetKeys.filter((key) => {
          return key !== '_meta' && newDatasetKeys.indexOf(key) === -1
        })

        // Remove outdated key-value pairs
        deletionKeys.forEach((deletionKey) => {
          delete chart.data.datasets[index][deletionKey]
        })

        // Update attributes individually to avoid re-rendering the entire chart
        for (const attribute in dataset) {
          if (dataset.hasOwnProperty(attribute)) {
            chart.datasets[index][attribute] = dataset[attribute]
          }
        }
      })

      if (newData.hasOwnProperty('labels')) {
        chart.labels = newData.labels
        // (this as any).$emit('labels:update') // TODO: FIX
      }
      if (newData.hasOwnProperty('xLabels')) {
        chart.xLabels = newData.xLabels(this as any).$emit('xlabels:update') // TODO: FIX
      }
      if (newData.hasOwnProperty('yLabels')) {
        chart.yLabels = newData.yLabels(this as any).$emit('ylabels:update') // TODO: FIX
      }
      // console.log('(this as any).$root(this as any).$root', (this as any).$nextTick())
      // (this as any).$root.updated
      console.log('(this as any).$.data.state.localChartData', (this as any).$.data.state.chartObj)
      console.log('this.$', (this as any).$.data.state.chartObj)
      // (this as any).$.data.state.localChartData.clear()
      // console.log('this', (this as any))
      // (this as any).$emit('chart:update') // TODO: FIX
    } else {
      if (chart) {
        chart
          .destroy()(this as any)
          .$emit('chart:destroy')
      }
      ;(this as any)
        .renderChart(
          this.chartData,
          (this as any).options
        )(this as any)
        .$emit('chart:render')
    }
  } else {
    if ((this as any).chartData) {
      ;(this as any).chartData
        .destroy()(this as any)
        .$emit('chart:destroy')
    }
    ;(this as any)
      .renderChart(
        this.chartData,
        (this as any).options
      )(this as any)
      .$emit('chart:render')
  }
}

const reactiveData = defineComponent({
  data() {
    return {
      chartData: null
    }
  },
  watch: {
    chartData: dataHandler
  }
})

const reactiveProp = defineComponent({
  props: {
    chartData: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  computed: {
    getme(): any {
      return this.chartData
    }
  }
  // watch: {
  //   chartData: dataHandler
  // },
  // watch: {
  //   'chartData' (prevState, newState) {
  //     if (prevState !== newState) {
  //       console.log(true)
  //     } else {
  //       console.log(false)
  //     }
  //   }
  // }
})

export { reactiveData, reactiveProp }
