import Toast from './toast.vue'

let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, props) {
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({ instance: Vue, message, propsData: props })
        }
    }
}

function createToast({ instance, message, propsData }) {
    let constructor = instance.extend(Toast)
    let toast = new constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
    // console.log('I am toast')
}