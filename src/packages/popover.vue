<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop :class="[`position-${position}`]">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name:'GuluPopover',
    data(){
        return {
            visible:false,
        }
    },
    props:{
        position:{
            type:String,
            default:'top',
            validator(value){
                return ['top','left','bottom','right'].indexOf(value) >= 0
            }
        },
        trigger:{
            type:String,
            default:'click',
            validator(value){
                return ['click','hover'].indexOf(value) >= 0
            }
        }
    },
    destroyed(){
        this.unregisterEvent()
    },
    mounted(){
        this.registerEvent()
    },
    methods:{
        unregisterEvent(){
            if(this.trigger === 'click'){
                this.$refs.popover.removeEventListener('click',this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter',this.open)
                this.$refs.popover.removeEventListener('mouseleave',this.close)
            }
        },
        registerEvent(){
            if(this.trigger === 'click'){
                this.$refs.popover.addEventListener('click',this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter',this.open)
                this.$refs.popover.addEventListener('mouseleave',this.close)
            }
        },
        positionContent(){
            const {triggerWrapper,contentWrapper} = this.$refs
            const {width,height,top,left} = triggerWrapper.getBoundingClientRect()
            let positionArr = {
                top:{
                    top:top+window.scrollY,
                    left:left + window.scrollX,
                    marginLeft:width/2,
                },
                bottom:{
                    top:top+window.scrollY+ height,
                    left:left + window.scrollX,
                    marginLeft:width/2,
                },
                left:{
                    top:top+window.scrollY+ height,
                    left:left + window.scrollX,
                    marginTop:-height/2
                },
                right:{
                    top:top+window.scrollY+ height,
                    left:left + window.scrollX+width,
                    marginTop:-height/2
                }
            }
            contentWrapper.style.left = positionArr[this.position].left+'px'
            contentWrapper.style.top = positionArr[this.position].top+'px'
            contentWrapper.style.marginLeft = positionArr[this.position].marginLeft+'px'
            contentWrapper.style.marginTop = positionArr[this.position].marginTop+'px'
            document.body.appendChild(contentWrapper)
        },
        onClickDocument(e) {
            const {popover} = this.$refs
            if(popover && (popover === e.target || popover.contains(e.target))){
                return
            }
            this.close()
        },
        open(){
            this.visible = true
            this.$nextTick(()=>{
                this.positionContent()
                document.addEventListener('click',this.onClickDocument)
            })
        },
        close(){
            this.visible = false
            document.addEventListener('click',this.onClickDocument)
        },
        onClick(event){
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible){
                    this.close()
                } else {
                    this.open()
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  left: 0;
  //   box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  border: 1px solid $border-color;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  background-color: #ffffff;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    position: absolute;
  }
  &.position-top {
    border-radius: $border-radius;
    transform: translateY(-100%) translateX(-50%);
    margin-top: -12px;
    &::before,
    &::after {
      left: 50%;
      transform: translateX(-10px);
    }
    &::before {
      border: 10px solid transparent;
      border-top-color: $border-color;
      top: 100%;
    }
    &::after {
      border: 10px solid transparent;
      border-top-color: white;
      top: calc(100% - 2px);
      transform: translateX(-10px);
    }
  }
  &.position-bottom {
    border-radius: $border-radius;
    transform: translateX(-50%);
    margin-top: 12px;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 0px;
      height: 0px;
      position: absolute;
      left: 50%;
      transform: translateX(-10px);
    }
    &::before {
      border: 10px solid transparent;
      border-bottom-color: $border-color;
      top: 0;
      transform: translateX(-10px) translateY(-100%);
    }
    &::after {
      border: 10px solid transparent;
      border-bottom-color: white;
      top: 2px;
      transform: translateX(-10px) translateY(-100%);
    }
  }
  &.position-right {
    border-radius: $border-radius;
    transform: translateY(-50%);
    margin-left: 12px;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 0px;
      height: 0px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border: 10px solid transparent;
      border-right-color: $border-color;
      left: -22px;
    }
    &::after {
      border: 10px solid transparent;
      border-right-color: white;
      left: -20px;
    }
  }
  &.position-left {
    border-radius: $border-radius;
    transform: translateX(-100%) translateY(-50%);
    margin-left: -12px;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 0px;
      height: 0px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border: 10px solid transparent;
      border-left-color: $border-color;
      right: -22px;
    }
    &::after {
      border: 10px solid transparent;
      border-left-color: white;
      right: -20px;
    }
  }
}
</style>
