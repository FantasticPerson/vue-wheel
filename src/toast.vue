<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <template  v-if="closeButton">
            <div class="line" ref="line"></div>
            <span class="close" @click="onClickClose" v-html="closeButton.text"></span>
        </template>
    </div>
</template>
<script>

export default {
    name:'GuluToast',
    props:{
        autoClose:{
            type:Boolean,
            default:true
        },
        autoCloseDelay:{
            type:Number,
            default:3
        },
        closeButton:{
            type:Object,
            default:()=>{
                return{
                    text:'关闭',
                    callback:undefined
                }
            }
        },
        enableHtml:{
            type:Boolean,
            default:false
        },
        position:{
            type:String,
            default:'top',
            validator(value){
                return ['top','bottom','middle'].indexOf(value) >= 0
            }
        }
    },
    mounted(){
        this.updateStyles()
        this.execAutoClose()
    },
    computed:{
        toastClasses(){
            return {
                [`position-${this.position}`]:true
            }
        }
    },
    methods:{
        execAutoClose(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
        },
        updateStyles(){
            const {line,wrapper} = this.$refs
            this.$nextTick(()=>{
                line.style.height = wrapper.getBoundingClientRect().height+'px'
            })
        },
        close(){
            this.$el.remove()
            this.$destroy()
        },
        log(){
            console.log('123')
        },
        onClickClose(){
            this.close()
            if(this.closeButton && this.closeButton.callback){
                this.closeButton.callback(this)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  font-size: 14px;
  line-height: 1.8;
  min-height: 40px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0 16px;

  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translate(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%);
  }
}
.message {
  padding: 8px 0;
}
.close {
  padding-left: 16px;
  cursor: pointer;
  flex-shrink: 0;
}
.line {
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>
