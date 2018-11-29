<template>
  <div style="padding:100px">
    <g-cascader
      popover-height="200px"
      :source="source"
      :selected.sync="selected"
      :load-data="loadData"
    ></g-cascader>
  </div>
</template>
<script>
import Cascader from '../packages/cascader'
import db from './city_db'

function ajax(parentId=0){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(db.filter(item=>item.pId == parentId))
        },3000)
    })
}

export default {
    created(){
        ajax(0).then(res=>{
            res.forEach(node=>{
                if(db.find(item=>item.pId === node.id)){
                    node.isLeaf = false
                } else {
                    node.isLeaf = true
                }
            })
            this.source = res
        })
    },
    methods:{
        loadData(node,callback){
            let {name,id,pId} = node
            ajax(id).then(result=>{
                result.forEach(node=>{
                    if(db.find(item=>item.pId === node.id)){
                        node.isLeaf = false
                    } else {
                        node.isLeaf = true
                    }
                })
                callback && callback(result)
            })
        }
    },
    components:{
        gCascader:Cascader
    },
    data(){
        return {
            selected:[],
            source:[]
    }},
}
</script>
<style lang="scss" scoped>
</style>
