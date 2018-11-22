import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-group-button', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)




new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})


