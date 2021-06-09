<template>
    <div class="notes">
        <label>
            <span>{{notesName}}</span>
            <input type="text" 
                v-model="value"
            :placeholder="placeholder">
        </label>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

let NotesProps = Vue.extend({
    props:{
        notes:String,
        notesName:String,
        placeholder:String
    }
})

@Component<Notes>({
    computed:{
        value:{
            get(){
                return this.notes;
            },
            set(newValue){
                this.$emit("update:notes",newValue)
            }
        }
    }
})

export default class Notes extends NotesProps {

}
</script>

<style lang="scss" scoped>
.notes{
    //background:#F5F5F5;
    height:60px;
    padding-left:15px;
    flex-shrink: 0;
    label{
        display:flex;
        height:60px;
        line-height:60px;
        input{
            background:transparent;
            font-size:16px;
            padding:0 20px;
            border:0px;
            flex-grow:1;
            padding-bottom:4px;
        }
    }
    
}
</style>