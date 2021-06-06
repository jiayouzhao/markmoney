<template>
    <Layout classPrefix="writeLayout">
        <ShowTag :tags="tags" :addTag.sync="tags"></ShowTag>
        <Notes></Notes>
        <InOut></InOut>
        <Number></Number>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import InOut from "@/components/money/InOut.vue"
import Notes from "@/components/money/Notes.vue"
import Number from "@/components/money/Number.vue"
import ShowTag from "@/components/money/ShowTag.vue"
import Component from 'vue-class-component';


@Component({
    components:{
        InOut,Notes,Number,ShowTag
    }
})
export default class Writer extends Vue{
    
    tags = ["衣","食","住","行"]
    
}
</script>

<style scoped>

</style>