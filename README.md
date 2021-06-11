## TimeRangeVue
A Vue component which can choose time range



## Install



```
 npm install time-range-vue -D
```


## Usage



```
import TimeRangeVue from 'time-range-vue'

Vue.use(TimeRangeVue);
```

## Example



```
<template>
    <time-range-vue :startOption="createStartDateOption" :endOptions="createEndDateOption" :type="type"
                    :beginTimeFileName="leftTime" :endTimeFileName="rightTime" :endValueFormat="endValueFormat"
                    @emitHandleSearch="emitHandleSearch"/>
</template>

export default {
  data () {
    return {
      startOption: {},
      endOptions: {},
      beginTimeFileName: 'beginTime',
      endTimeFileName: 'endTime',
      type: 'datetime'
    }
  },
  methods: {
    emitHandleSearch(filedName, fileValue){

    }
  }
}


```




