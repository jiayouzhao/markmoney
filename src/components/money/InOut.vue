<template>
    <div class="InOutWrapper">
        <div class="moneyIn" 
        :class="type==='-' && 'selected'"
        @click="toggleType('-')">支出</div>
        <div class="moneyOut" :class="type==='+' && 'selected'"
        @click="toggleType('+')">收入</div>
    </div>
</template>

<script lang="ts">

import Vue from "vue"
import { Component } from "vue-property-decorator";

const InOutProps  = Vue.extend({
    props:{
        name:String
    }
})

@Component 

export default class InOut extends InOutProps{
    type = "-";
    
    toggleType(type: string){
        this.type = type;
    }
}


/* export default {
    data(){
        return {
            type:'-'
        }
    },
    methods:{
        toggleType(type){
            this.type = type === "-" ? "+" : "-"
        }
    }
} */
</script>

<style lang="scss" scoped>
.InOutWrapper{
    display:flex;
    width:100%;
    height:60px;
    line-height:60px;
    align-items:center;
    flex-shrink: 0;
    div{
        width:50%;
        height:100%;
        text-align:center;
        font-size:20px;
        font-weight:bold;
        background:#C4C4C4;
        position:relative;
        &.selected{
            &::after{
                content:'';
                width:100%;
                border-bottom:3px solid #3F3F3F;
                position:absolute;
                left:0px;
                bottom:0px;
            }
        }
    }
}
</style>