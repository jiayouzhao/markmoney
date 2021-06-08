<template>
    <div class="showTag">
        <ul class="tags">
            <li 
            v-for="(item) in tags" :key="item.id"
            :class="{selected:selectArray.indexOf(item)>=0}"
            @click="toggle(item)"
            >{{item.name}}</li>

        </ul>
        <a href="javascript:;" @click="addTag">新增标签</a>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface tagItem {
    id:number;
    name:string;
}

const ShowTagProps = Vue.extend({
    props:{
        tags:Array
    }
})

@Component

export default class ShowTag extends ShowTagProps {
    selectArray:tagItem[] = [];
    toggle(tag:tagItem){
        
        let index = this.selectArray.indexOf(tag);
        console.log(index);
        if(index>=0){
            this.selectArray.splice(index,1)

        } else {
            this.selectArray.push(tag);
        }
        this.$emit("update:selectedTags",this.selectArray)
    }
    addTag(){
        let name = window.prompt("请输入标签名")!;
        if(name === null){return }
        if(name.length === 0){
            alert("标签名不正确");
        }
        this.$emit("update:addTag",[...this.tags,{id:this.tags.length,name}])
    }
}
</script>

<style lang="scss" scoped>
.showTag{
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding:10px 15px;
    background:#fff;
    .tags{
        margin-bottom:15px;
        overflow-y:auto;
        li{
            display:inline-block;
            background:#D9D9D9;
            margin-right:15px;
            padding:5px 18px;
            border-radius:26px;
            margin-bottom:5px;
            &.selected{
                background:#8B8B8B;
                color:white;
            }
        }
    }
    >a{
        display:inline-block;
        border-bottom:1px solid #DDDDDD;
        width:20%;
        text-align:center;
        padding:0 5px 3px;
    }
}
</style>