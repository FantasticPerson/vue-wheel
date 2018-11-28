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

import Tabs from './tabs.vue'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'

import Popover from './popover.vue'

import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'

import Cascader from './cascader.vue'

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

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)

Vue.component('g-popover', Popover)

Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item',CollapseItem)

Vue.component('g-cascader',Cascader)

Vue.use(plugin)

new Vue({
    el: '#app',
    data(){return  {
        source:[{
            name:'浙江',
            children:[
                {
                    name:'嘉兴市',
                    children:[
                        {name:'name1'},
                        {name:'name12'},
                        {name:'name134'}
                    ]
                },
                {
                    name:'湖州市',
                    children:[
                        {name:'name16'},
                        {name:'name126'},
                        {name:'name1346'}
                    ]
                },
                {
                    name:'杭州市',
                    children:[
                        {name:'name167'},
                        {name:'name1267'},
                        {name:'name13467'}
                    ]
                }
            ]
        },{
            name:'浙江2',
            children:[
                {
                    name:'嘉兴市2',
                    children:[
                        {name:'name168'},
                        {name:'name1268'},
                        {name:'name13468'}
                    ]
                },
                {
                    name:'嘉兴市21',
                    children:[
                        {name:'name1681'},
                        {name:'name12681'},
                        {name:'name134681'}
                    ]
                }
            ]
        },{
            name:'浙江2',
            children:[
                {
                    name:'嘉兴市2',
                    children:[
                        {name:'name168'},
                        {name:'name1268'},
                        {name:'name13468'}
                    ]
                },
                {
                    name:'嘉兴市23',
                    children:[
                        {name:'name1683'},
                        {name:'name12683'},
                        {name:'name134683'}
                    ]
                }
            ]
        }]
    }},
    created() {
        // this.$toast()
    },
    methods: {
        
    }
})


