<template>
    <Layout classPrefix="writeLayout">
        <ShowTag 
        :tags="tags" 
        :addTag.sync="tags"
        :selectedTags.sync="record.selectedTags"
        ></ShowTag>
        <Notes :notes.sync="record.notes"></Notes>
        <InOut :type.sync="record.inout"></InOut>
        <Number :amount.sync="record.amount"  @submit="saveRecord"></Number>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import InOut from "@/components/money/InOut.vue";
import Notes from "@/components/money/Notes.vue";
import Number from "@/components/money/Number.vue";
import ShowTag from "@/components/money/ShowTag.vue";
import tagsModel from '@/tagsModel';
import Component from 'vue-class-component';

@Component<Writer>({
    components:{
        InOut,Notes,Number,ShowTag
    },
    watch:{
        tags(value){
            //console.log(value);
            tagsModel.save(value);
        }
    }
})

export default class Writer extends Vue{
    localRecord = localStorage.getItem("recordList");
    tags = tagsModel.get();
    recordList= this.localRecord ? JSON.parse(this.localRecord) : [];
    record = {
        selectedTags:[],
        notes:'',
        inout:"-",
        amount:'0'
    }
    saveRecord(){
        let copyRecord = JSON.parse(JSON.stringify(this.record));
        this.recordList.push(copyRecord)
        localStorage.setItem('recordList',JSON.stringify(this.recordList));
        
    }
}
</script>

<style scoped>

</style>