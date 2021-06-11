import TimeRange from './src/components/timerange';
import _Vue from 'vue'

TimeRange.install = Vue => {
  if(!Vue){
    window.Vue = Vue = _Vue
  }

  Vue.component(TimeRange.name, TimeRange);
}



export default TimeRange;
