<template>
    <Layout >
        <div class="tagWrapper">
            <div class="ulList">
                <router-link class="liList" :to="`tag/editor/${item.id}`" v-for="item in tags" :key="item.id">
                    <span>{{item.name}}</span>
                    <Icon class="rightIcon" name="right"></Icon>
                </router-link>
            </div>
            <div class="createBtnWrapper">
                <Button buttonName="新建标签" class="createBtn" @click.native="createTag">
                </Button>
                
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
.ulList{
    background:#fff;
    padding:0 15px;
    .liList{ 
        display:flex;
        font-size:16px;
        justify-content:space-between;
        align-items:center;
        height:50px;
        border-bottom:1px solid #eee;
        color:#000;
        padding:0 15px;
        .rightIcon{
            width:25px;
            height:25px;
        }
    } 
}
.createBtnWrapper{
    text-align:center;
    margin-top:40px;
    margin-bottom:40px;
}

</style>