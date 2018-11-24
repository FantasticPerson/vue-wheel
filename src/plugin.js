import Toast from './toast.vue'
export default {
    install(Vue,options){
        Vue.prototype.$toast = function(message,props){
            let constructor = Vue.extend(Toast)
            let toast = new constructor({
                propsData:props
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
            // console.log('I am toast')
        }
    }
}