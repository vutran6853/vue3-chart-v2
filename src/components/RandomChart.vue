<template>
  <div class="small">
    <Chart :chartData="this.dataCollection" />
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import Chart from './Chart.vue'
// import { Pie, Doughnut } from './components/BaseChart'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RandomChart',
  components: {
    Chart
  },
  data() {
    return {
      dataCollection: {}
    }
  },
  beforeMount() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.dataCollection = {
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
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
})
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
