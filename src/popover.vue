<template>
    <div class="popover" @click.stop="xxx">
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
    mounted(){

    },
    methods:{
        xxx(){
            this.visible = !this.visible
            if(this.visible){
                this.$nextTick(()=>{
                    const {triggerWrapper,contentWrapper} = this.$refs
                    const {width,height,top,left} = triggerWrapper.getBoundingClientRect()
                    contentWrapper.style.left = left + window.scrollX+ 'px'
                    contentWrapper.style.top = top+window.scrollY+ 'px'
                    contentWrapper.style.marginLeft = width/2+'px'
                    document.body.appendChild(contentWrapper)
                })
                this.$nextTick(()=>{
                    let eventHandler = (e) => {
                        this.visible = false
                        document.removeEventListener('click',eventHandler)
                    }
                    document.addEventListener('click',eventHandler)
                })
            }
        }
    },
    mounted(){
        
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
