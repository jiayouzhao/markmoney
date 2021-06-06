<template>
    <div class="notes">
        <label>
            <span>备注</span>
            <input type="text" 
                v-model="value"
            placeholder="在这里添加备注">
        </label>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component

export default class Notes extends Vue {
    value="";
}
</script>

<style lang="scss" scoped>
.notes{
    background:#F5F5F5;
    height:60px;
    padding-left:15px;
    flex-shrink: 0;
    label{
        display:flex;
        height:60px;
        line-height:60px;
        span{
            
        }
        input{
            
            font-size:16px;
            padding:0 20px;
            border:0px;
            flex-grow:1;
            background:#F5F5F5;
            padding-bottom:4px;
        }
    }
    
}
</style>