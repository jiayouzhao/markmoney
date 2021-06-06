<template>
    <Layout classPrefix="writeLayout">
        <ShowTag :tags="tags" :addTag.sync="tags"></ShowTag>
        <Notes></Notes>
        <InOut></InOut>
        <Number></Number>
    </Layout>
</template>

<script>
import InOut from "@/components/money/InOut.vue"
import Notes from "@/components/money/Notes.vue"
import Number from "@/components/money/Number.vue"
import ShowTag from "@/components/money/ShowTag.vue"

export default {
    data(){
        return {
            tags:["衣","食","住","行"]
        }
    },
    components:{
        InOut,Notes,Number,ShowTag
    }
}
</script>

<style scoped>

</style>