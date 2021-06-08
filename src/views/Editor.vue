<template>
    <Layout>
        <div class="editorWrapper">
            <div class="top">
                <Icon class="iconEditor" @click.native="goBack" name="left"></Icon>
                <p>编辑标签</p>
            </div>
            <div class="editorTag">
                <Notes notesName="标签名" :notes="tag && tag.name"
                @update:notes="updateTag"
                ></Notes>
            </div>
            <div class="deleteTag">
                <Button buttonName="删除标签" @click.native="remove"></Button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import tagsModel from "@/tagsModel";
import Notes from "@/components/money/Notes.vue";

@Component({
    components:{Notes}
})
export default class Editor extends Vue{
    tag:{id:number;name:string;}|null = null;
    created(){
        let id = this.$route.params.id;
        let tagList = tagsModel.get();
        
        let indexTag = tagList.find(item=>{
            
            return item.id.toString() === id
        })
        
        if(!indexTag){
            this.$router.replace('/404');
            return 
        }
        this.tag = indexTag;
        console.log(indexTag);
    }
    updateTag(e:string){
        tagsModel.update(this.tag!,e);
    }
    goBack(){
        this.$router.replace("/tag");
    }
    remove(){
        if(this.tag){
            let result = tagsModel.remove(this.tag.id);
            if(result === "success"){
                this.$router.replace("/tag");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.editorWrapper{
    .top{
        height:50px;
        display:flex;
        align-items:center;
        background:#fff;
        position:relative;
        .iconEditor{
            width:25px;
            height:25px;
            position:absolute;
            left:15px;
        }
        p{
            width:100%;
            text-align:center;
            line-height:25px;
        }
    }
    .editorTag{
        background:#fff;
        margin-top:8px;
    }
    .deleteTag{
        margin-top:50px;
        text-align:center;
    }
}
</style>