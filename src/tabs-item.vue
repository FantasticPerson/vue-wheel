<template>
    <div class="tabs-item" :class="classes" @click="onItemClick">
        <slot></slot>
    </div>    
</template>
<script>
export default {
    name:'GuluTabsItem',
    inject:['eventBus'],
    data(){
        return {
            active:false
        }
    },
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        name:{
            type:String|Number,
            required:true
        }
    },
    computed:{
        classes(){
            return {
                active:this.active,
                disabled:this.disabled
            }
        }
    },
    methods:{
        onItemClick(){
            if(this.disabled) return
            this.eventBus.$emit('update:selected',this.name,this)
        }
    },
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            this.active = (name === this.name)
        })
    }
}
</script>
<style lang="scss" scoped>
$blue:blue;
$disabled-text-color:gray;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  
  &.active {
    color:$blue;
    font-weight: bold;
  }
  &.disabled{
      color: $disabled-text-color;
      cursor:not-allowed;
  }
}
</style>
