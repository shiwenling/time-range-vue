<template>
  <div id="app">
    <time-range :startOption="startOption" :endOptions="endOptions" :beginTimeFileName="beginTimeFileName"
                    :endTimeFileName="endTimeFileName"  @emitHandleSearch="emitHandleSearch" />

  </div>
</template>

<script>

  import TimeRange from './components/timerange';

export default {
  name: 'app',
  data () {
    return {
      startOption: {},
      endOptions: {},
      beginTimeFileName: 'beginTime',
      endTimeFileName: 'endTime'
    }
  },
  components: {
    TimeRange
  },
  methods: {
    emitHandleSearch(filedName, fileValue){

    }
  }
}
</script>

