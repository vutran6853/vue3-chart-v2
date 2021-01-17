<template>
  <div class="display-flex">
    <h1>hello wolrd</h1>
    <!-- <BaseChart chartId="s" /> -->
    <!-- <BaseFunction /> -->
    <div style="height: 50% !important; width: 1200px">
      <Chart v-bind:chartData="this.dataCollection" :chartOptions="this.chartOptions" />
      <button v-on:click="this.fillData">Randomize</button>
      <button @click="increase()">Increase height</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import BaseChart from './components/BaseChart'
// import BaseFunction from './components/BaseFunction/BaseFunction'
import Chart from './components/Chart.vue'

export default defineComponent({
  name: 'App',
  components: {
    Chart
    // BaseFunction
  },
  data(): any {
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
        height: 100
        // maintainAspectRatio: true
      },
      height: 300
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
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
          // {
          //   label: 'Data One',
          //   backgroundColor: '#f87979',
          //   data: [this.getRandomInt()]
          // },
          // {
          //   label: '# of Votes',
          //   data: [12, 19, 3, 5, 2, 3],
          //   backgroundColor: [
          //       'rgba(255, 99, 132, 0.2)',
          //       'rgba(54, 162, 235, 0.2)',
          //       'rgba(255, 206, 86, 0.2)',
          //       'rgba(75, 192, 192, 0.2)',
          //       'rgba(153, 102, 255, 0.2)',
          //       'rgba(255, 159, 64, 0.2)'
          //   ],
          //   borderColor: [
          //       'rgba(255, 99, 132, 1)',
          //       'rgba(54, 162, 235, 1)',
          //       'rgba(255, 206, 86, 1)',
          //       'rgba(75, 192, 192, 1)',
          //       'rgba(153, 102, 255, 1)',
          //       'rgba(255, 159, 64, 1)'
          //   ],
          //   borderWidth: 1
          // }
        ]
      }
    },
    increase() {
      this.height += 10
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  computed: {
    myStyles(): { height: string; position: string } {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
})
</script>
