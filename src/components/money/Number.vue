<template>
    <div class="number">
        <div class="showNumber">{{output}}</div>
        <div class="keyboard" @click="inputNumber">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span class="deleteBtn">删除</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span class="emptyBtn">清空</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span class="okBtn">OK</span>
            <span class="zeroBtn">0</span>
            <span>.</span>
        </div>
    </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

const NumberProps = Vue.extend({
    props:{
        amount:String
    }
})

@Component

export default class Number extends NumberProps{
    output = this.amount;
    inputNumber(event: MouseEvent){
        let clickBtn = (event.target as HTMLButtonElement)
        let inputNum = clickBtn.textContent!;
        let deleteBtn = document.querySelector(".deleteBtn");
        let emptyBtn = document.querySelector(".emptyBtn");
        let okBtn = document.querySelector(".okBtn");
        
        if(clickBtn === deleteBtn){
            
            if(this.output.length === 1){
                this.output = "0"
            } else {
                this.output = this.output.slice(0,-1)
            }
            
            return;
        }
        if(clickBtn === emptyBtn){
            this.output = '0'
            return 
        }
        if(this.output.length >= 16){
            return;
        }
        
        if(this.output === "0"){
            if('0123456789'.indexOf(inputNum)>=0){
                this.output = inputNum;
                return 
            }
        }
        if(this.output.indexOf(".")>=0 && inputNum === "."){
            return 
        }
        if(clickBtn === okBtn){
            this.$emit("update:amount",this.output)
            return ;
        }
        this.output += inputNum;
        
    }
}

</script>

<style lang="scss" scoped>
@import "~@/assets/style/share.scss";

.number{
    
    .showNumber{
        font-family:Consolas,monospace;
        text-align:right;
        font-size:36px;
        padding:2px 15px;
        box-shadow:0 -3px 3px -3px rgba(0,0,0,0.14) inset;
    }
    .keyboard{
        @extend %clearfixed;
        span{
            width:25%;
            height:64px;
            line-height:64px;
            text-align:center;
            background:#f2f2f2;
            float:left;
            &.okBtn{
                float:right;
                height: 64*2px;
                line-height: 64*2px;
                background:#8B8B8B;
            }
            &.zeroBtn{
                width: 25%*2;
            }
            &:nth-child(2),&:nth-child(5){
                background:#E0E0E0;
            }
            &:nth-child(3),&:nth-child(6),&:nth-child(9){
                background:#D3D3D3;
            }
            &:nth-child(4),&:nth-child(7),&:nth-child(10){
                background:#B8B8B8;
            }
            &:nth-child(8),&:nth-child(11),&:nth-child(13){
                background:#A9A9A9;
            }
            &:last-child{
                background:#9A9A9A;
            }
        }
    }
}
</style>