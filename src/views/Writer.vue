<template>
    <Layout classPrefix="writeLayout">
        <ShowTag 
        :tags="tags"
        :selectArray.sync ="selectArray" 
        ></ShowTag>
        <div class="writerNotesWrapper">
            <Notes :notes.sync="record.notes"
                notesName="备注"
                placeholder="在这里添加备注"
            ></Notes>
        </div>
        
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
import Component from 'vue-class-component';

interface tagItem {
    id:number;
    name:string;
}

@Component<Writer>({
    components:{
        InOut,Notes,Number,ShowTag
    },
    watch:{
        tags(value){
            this.$store.commit('save',value)
        }
    }
})

export default class Writer extends Vue{
    selectArray:tagItem[]=[];
    tags = undefined;
    
    
    record = {
        selectedTags:this.selectArray,
        notes:'',
        inout:"-",
        amount:'0'
    }
    created(){
        
        this.$store.commit('init');
       this.tags = this.$store.state.tagsList.tagsList;
    }
    saveRecord(){
        
        this.$store.commit('saveRecord',this.record)
        this.record.notes = '';
        this.record.amount = "0";
        this.record.inout = "-";
        this.selectArray = [];
        
    }
}
</script>

<style lang="scss" scoped>
 
.writerNotesWrapper{
    background:#f5f5f5;
}
</style>