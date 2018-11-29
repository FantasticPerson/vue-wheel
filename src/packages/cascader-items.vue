<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        {{item.name}}
        <span v-if="showArrow(item)">></span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-item
        :items="rightItems"
        :height="height"
        :selected="selected"
        :level="level+1"
        @update:selected="onUpdateSelected"
      ></gulu-cascader-item>
    </div>
  </div>
</template>
<script>
export default {
    
    methods:{
      onClickLabel(item){
        console.log(item)

        // this.$set(this.selected,this.level,item)
        // this.selected.push(item)
        let copy =JSON.parse(JSON.stringify(this.selected))
        copy.splice(this.level+1)
        copy[this.level] = item
        this.$emit('update:selected',copy)
      },
      onUpdateSelected(newSelected){
        this.$emit('update:selected',newSelected)
      }
    },
    name:"GuluCascaderItem",
    props:{
      items:{
        type:Array,
        required:true
      },
      height:{
        type:String
      },
      selected:{
        type:Array,
        default:()=>[]
      },
      level:{
        type:Number,
        default:0
      },
      loadData:{
          type:Function
      }
    },
    data(){
      return {
        leftSelected:null
      }
    },
    methods:{
      showArrow(item){
        if(this.loadData && !item.isLeaf){
          return true
        } else if(item.children){
          return true
        }
        return false
      }
    },
    computed:{
      rightItems(){
        if(this.selected[this.level] && this.selected[this.level].children){
          return this.selected[this.level].children
        }else {
          return null
        }
      },
      
    },
    mounted(){
    },
    components:{}
}
</script>
<style lang="scss" scoped>
@import "../assets/_var.scss";
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
    overflow: auto;
  }
  .label {
    padding: 0.3em 1em;
  }
}
</style>
