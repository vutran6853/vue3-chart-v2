<template>
  <div class="display-flex">
    <!-- <BaseChart chartId="s" /> -->
    <!-- <BaseFunction /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseChart from './components/BaseChart'
// import BaseFunction from './components/BaseFunction/BaseFunction'

export default defineComponent({
  name: 'App',
  components: {
    BaseChart
    // BaseFunction
  }
})
</script>
