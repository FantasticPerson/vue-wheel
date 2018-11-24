import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import plugin from './plugin.js'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-group-button', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)

Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)




Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false
    },
    created() {
        // this.$toast()
    },
    methods: {
        showMessage() {
            this.$toast('<a href="https://www.baidu.com">baidu</a>我知道了我知道了我知道了我知道了我知道了我知道了我知道了我知道了我知道了我知道了我知道了我知道了我知道了我知道了我知道了我知道了'+Math.random()*100, {
                closeButton: {
                    text: '我知道了',
                    callback(toast) {
                        toast.log()
                        console.log('用户说他知道了')
                    }
                },
                enableHtml:true,
                position:'top',
                autoClose:false
            })
        }
    }
})


