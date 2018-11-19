import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-group-button', ButtonGroup)


new Vue({
    el: '#app',
    data: {
        loading1: false
    }

})


import chai from 'chai'
const expect = chai.expect
//单元测试
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')

}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}
{
    const div = document.createElement('div')
    document.body.append(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}

{
    const div = document.createElement('div')
    document.body.append(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{
    //mock
    const Constructor = Vue.extend(Button)
    const gButton = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    gButton.$mount()
    gButton.$on('click',function(){
        console.log(1)
    })
    gButton.$el.click()
}