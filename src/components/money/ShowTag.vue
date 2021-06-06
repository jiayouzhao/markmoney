<template>
    <div class="showTag">
        <ul class="tags">
            <li 
            v-for="(item) in tags" :key="item"
            :class="{selected:selectArray.indexOf(item)>=0}"
            @click="toggle(item)"
            >{{item}}</li>

        </ul>
        <a href="javascript:;" @click="addTag">新增标签</a>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const ShowTagProps = Vue.extend({
    props:{
        tags:Array
    }
})

@Component

export default class ShowTag extends ShowTagProps {
    selectArray:string[] = [];
    toggle(tag:string){
        let index = this.selectArray.indexOf(tag);
        if(index>=0){
            this.selectArray.splice(index,1)

        } else {
            this.selectArray.push(tag);
        }
    }
    addTag(){
        let name = window.prompt("请输入标签名")!;
        if(name === null){return }
        if(name.length === 0){
            alert("标签名不正确");
        }
        this.$emit("update:addTag",[...this.tags,name])
    }
}
</script>

<style lang="scss" scoped>
.showTag{
    padding:10px 15px;
    .tags{
        margin-bottom:15px;
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
    a{
       border-bottom:1px solid #DDDDDD;
       padding:0 5px 3px;
    }
}
</style>