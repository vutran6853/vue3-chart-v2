# vue3-chartjs

## Install

- **npm** `npm install vue3-chartjs chart.js --save`
- **yarn** `yarn add vue3-chartjs chart.js`



## How to use

You need to import the component and then either use `extends` or `mixins` and add it.

You can import each module individual.

```js
import { Bar } from 'vue3-chart-v2'
```

Just create your own component.

// MonthlyChart.vue
```vue
<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue-chartjs'

export default defineComponent({
  name: 'MonthlyChart',
  extends: [Bar],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  }
})
</script>
```

Then simply import and use your own extended component and use it like a normal vue component

```vue
<template>
  <MonthlyChart />
</template>

<script>
import { defineComponent } from 'vue'
import MonthlyChart from './path/to/MonthlyChart.vue'

export default defineComponent({
  name: 'App',
})
</script>
```
## Another Example with options
You can overwrite the default chart options as props. Just pass the options object as a second parameter to the render method

```js
// MonthlyChart.vue
import { defineComponent } from 'vue'
import { Line } from 'vue-chartjs'

export default defineComponent({
  name: 'MonthlyChart',
  extends: [Line],
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
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
})
```

Then simply use it in your vue app

```vue
<template>
  <MonthlyChart v-bind:chartData="..." v-bind:chartOptions="..." />
</template>

<script>
import { defineComponent } from 'vue'
import MonthlyChart from './path/to/MonthlyChart.vue'

export default defineComponent({
  name: 'App',
})
</script>
```
## Available Charts

### Bar Chart

![Bar](assets/bar.png)

### Line Chart

![Line](assets/line.png)

### Doughnut

![Doughnut](assets/doughnut.png)

### Pie

![Pie](assets/pie.png)

### Radar

![Pie](assets/radar.png)

### Polar Area

![Pie](assets/polar.png)

### Bubble

![Bubble](assets/bubble.png)

### Scatter

![Scatter](assets/scatter.png)
