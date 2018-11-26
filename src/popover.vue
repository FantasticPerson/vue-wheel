<template>
    <div class="popover" ref="popover" @click.stop="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
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
                console.log('onclick')
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
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  left: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%) translateX(-50%);
}
</style>
