<template>
    <div class="popover" ref="popover" @click.stop="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
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
        return {visible:false}
    },
    methods:{
        positionContent(){
            const {triggerWrapper,contentWrapper} = this.$refs
            const {width,height,top,left} = triggerWrapper.getBoundingClientRect()
            contentWrapper.style.left = left + window.scrollX+ 'px'
            contentWrapper.style.top = top+window.scrollY+ 'px'
            contentWrapper.style.marginLeft = width/2+'px'
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
  border-radius: $border-radius;
  transform: translateY(-100%) translateX(-50%);
  margin-top: -12px;
  max-width: 20em;
  word-break: break-all;
  background-color: #FFFFFF;
  &::before {
    content: "";
    display: block;
    border: 10px solid transparent;
    border-top-color: $border-color;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-10px);
  }
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    border-top-color: white;
    width: 0px;
    height: 0px;
    position: absolute;
    top: calc(100% - 2px);
    left: 50%;
    transform: translateX(-10px);
  }
}
</style>
