<template>
    <Layout >
        <div class="tagWrapper">
            <ul>
                <li v-for="item in tags" :key="item">
                    <span>{{item}}</span>
                    <Icon class="rightIcon" name="right"></Icon>
                </li>
            </ul>
            <div class="createBtnWrapper">
                <span class="createBtn" @click="createTag">
                    新建标签
                </span>
                
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import tagsModel from "@/tagsModel";

@Component

export default class Tag extends Vue {
    tags = tagsModel.get();
    createTag(){
        let name = window.prompt("请输入标签名");
        if(name === null){return}
        if(name.length === 0){
            alert("标签名不能为空")
            return 
        }
        tagsModel.create(name);
    }
}
</script>

<style lang="scss" scoped>
ul{
    background:#fff;
    padding:0 15px;
    li{ 
        display:flex;
        font-size:16px;
        justify-content:space-between;
        align-items:center;
        height:50px;
        border-bottom:1px solid #eee;
        .rightIcon{
            width:25px;
            height:25px;
        }
    }
}
.createBtnWrapper{
    text-align:center;
    margin-top:40px;
    .createBtn{
       
        background:#767676;
        padding:15px 20px;
        border-radius:8px;
        color:#fff;
    }
}

</style>