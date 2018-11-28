<template>
    <div ref="wrapper" class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <template  v-if="closeButton">
                <div class="line" ref="line"></div>
                <span class="close" @click="onClickClose" v-html="closeButton.text"></span>
            </template>
        </div>
    </div>
</template>
<script>

export default {
    name:'GuluToast',
    props:{
        autoClose:{
            type:[Boolean,Number],
            default:5,
            validator(value){
                return value === false || typeof value === 'number'
            }
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
                },this.autoClose*1000)
            }
        },
        updateStyles(){
            this.$nextTick(()=>{
                const {line,toast} = this.$refs
                line.style.height = toast.getBoundingClientRect().height+'px'
            })
        },
        close(){
            this.$emit('close')
            this.$nextTick(()=>{
                this.$el.remove()
                this.$destroy()
            })
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
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 0;
    > .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 1s;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up 1s;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    > .toast {
      animation: fade-in 1s;
    }
  }
}
.toast {
  font-size: 14px;
  line-height: 1.8;
  min-height: 40px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0 16px;
  border-radius: 8px;
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
