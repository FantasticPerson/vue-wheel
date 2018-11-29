<template>
  <div class="cascader" ref="cascader">
    <div class="trigger" @click="toggle">{{result || '&nbsp;'}}</div>
    <div class="popoverWrapper" v-if="popoverVisible">
      <cascader-items
        class="popover"
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        :loadData="loadData"
        @update:selected="onUpdateSelected"
      ></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from './cascader-items'
import Popover from './popover'
export default {
    name:'GuluCascader',
    methods:{
        open(){
            this.popoverVisible = true
            this.$nextTick(()=>{
                document.addEventListener('click',this.onClickDoucment)
            })
        },
        close(){
            this.popoverVisible = false
            document.removeEventListener('click',this.onClickDoucment)
        },
        toggle(){
            if(this.popoverVisible){
                this.close()
            } else {
                this.open()
            }
        },
        onClickDoucment(e){
            let {cascader} = this.$refs
            if(cascader === e.target || cascader.contains(e.target)) return
            this.close()
        },
        findSelectedItem(children,id){
            let found = children.find(item=>item.id === id)
            if(found) return found
            else {
                for(let i=0;i<children.length;i++){
                    if(children[i].children){
                        let found = this.findSelectedItem(children[i].children,id)
                        if(found) return found
                    }
                }
            }
            return undefined
        },
        onUpdateSelected(newSelected){
            this.$emit('update:selected',newSelected)
            let lastItem = newSelected[newSelected.length-1]
            let updateSource = (result)=>{
                if(Array.isArray(result) && result.length > 0){
                    let copy = JSON.parse(JSON.stringify(this.source))
                    let found = this.findSelectedItem(this.source,lastItem.id)
                    if(found){
                        this.$set(found,'children',result)
                    }
                }
            }
            if(!lastItem.isLeaf){
                this.loadData(lastItem,updateSource.bind(this))
            }
        }
    },
    data(){
        return {
            popoverVisible:false
        }
    },
    props:{
        source:{
            type:Array,
            required:true
        },
        popoverHeight:{
            type:String
        },
        selected:{
            type:Array,
            default:()=>[]
        },
        loadData:{
            type:Function
        }
    },
    computed:{
        result(){
            return this.selected.map(item=>item.name).join('/')
        }
    },
    components:{
        CascaderItems
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/_var.scss";
.cascader {
  display: inline-block;
  position: relative;
  .trigger {
    height: $input-height;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
  .popoverWrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    display: flex;
    margin-top: 8px;
    @extend .box-shadow;
  }
}
</style>
