<template>
    <Layout classPrefix="writeLayout">
        {{record}}
        <ShowTag 
        :tags="record.tags" 
        :addTag.sync="record.tags"
        :selectedTags.sync="record.selectedTags"
        ></ShowTag>
        <Notes :updateNotes.sync="record.notes"></Notes>
        <InOut :type.sync="record.inout"></InOut>
        <Number :amount.sync="record.amount"></Number>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import InOut from "@/components/money/InOut.vue"
import Notes from "@/components/money/Notes.vue"
import Number from "@/components/money/Number.vue"
import ShowTag from "@/components/money/ShowTag.vue"
import Component from 'vue-class-component';

type Record = {
    tags:string[];
    selectedTags:string[];
    notes:string;
    inout:string;
    amount:string;
}

@Component({
    components:{
        InOut,Notes,Number,ShowTag
    }
})

export default class Writer extends Vue{
    record:Record = {
        tags : ["衣","食","住","行","玩"],
        selectedTags:[],
        notes:'',
        inout:"-",
        amount:'0'
    }

}
</script>

<style scoped>

</style>