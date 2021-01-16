# vue3-chart-v2
vue3-chart-v2 is a wrapper for [Chart.js](https://github.com/chartjs/Chart.js) in vue 3. You can easily create reuseable chart components. Inspired by vue-chartjs

[![npm](https://img.shields.io/badge/npm%20package-0.7.0-blue)](https://www.npmjs.com/package/vue3-chart-v2)

## Looking for the documentation?
Head over here ==> [vue3-chart-v2](https://vue3-chart-v2.netlify.app/)

## Prerequisite
- Vue 3 is required

## Install

- **npm** `npm install vue3-chart-v2 chart.js --save`
- **yarn** `yarn add vue3-chart-v2 chart.js`

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
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Bar,
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
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Line,
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

![Bar](src/assets/bar.png)

### Line Chart

![Line](src/assets/line.png)

### Doughnut

![Doughnut](src/assets/doughnut.png)

### Pie

![Pie](src/assets/pie.png)

### Radar

![Pie](src/assets/radar.png)

### Polar Area

![Pie](src/assets/polar.png)

### Bubble

![Bubble](src/assets/bubble.png)

### Scatter

![Scatter](src/assets/scatter.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run test:unit
```

## Contributing

1. Fork it (https://github.com/vutran6853/vue3-chart-v2/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request