<template>
    <span class="createBtn">
        {{buttonName}}
    </span>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props:{
        buttonName:String
    }
})
export default class Button extends Vue{

}

</script>

<style lang="scss" scoped>
.createBtn{
       
    background:#767676;
    padding:15px 20px;
    border-radius:8px;
    color:#fff;
}
</style>