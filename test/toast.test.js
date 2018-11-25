const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    // BDD 行为驱动测试  行为描述
    it('存在.', () => {
        expect(Toast).to.exist
    })

    describe('props', function () {
        it('接受 autoClose', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            vm.$on('close',()=>{
                setTimeout(()=>{
                    expect(document.body.contains(vm.$el)).to.eq(false)
                    done()
                },10)
            })
        })
        it('接受 position 属性', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
        it('接受 closeButton 属性', (done) => {
            const Constructor = Vue.extend(Toast)
            const callback = sinon.fake()
            const vm = new Constructor({
                propsData: {
                    closeButton:{
                        text:'close',
                        callback:callback
                    }
                }
            }).$mount()
            const closeButton = vm.$el.querySelector('.close')
            expect(closeButton.innerText).to.eq('close')
            setTimeout(()=>{
                closeButton.click()
                expect(expect(callback).to.have.been.called)
                done()
            },200)
        })
        it('接受 enableHtml 属性', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    enableHtml:true
                }
            })
            vm.$slots.default=['<strong id="hihi">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#hihi')
            expect(strong).to.be.exist
        })
    })
})