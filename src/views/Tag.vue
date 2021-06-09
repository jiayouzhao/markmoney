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

@Component({
    computed:{
        tags(){
            return this.$store.state.tagsList.tagsList
        }
    }
})

export default class Tag extends Vue {

    created(){
        this.$store.commit("init")
    }
    createTag(){
        let name = window.prompt("请输入标签名");
        
        this.$store.commit("create",name)
        
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