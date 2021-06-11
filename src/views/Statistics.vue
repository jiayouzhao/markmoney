<template>
    <Layout>
        <InOut class="statisticInout" :type="type" @update:type="toggleType"></InOut>
        <ul class="firstStatistic">
            <li v-for="(groups,index) in recordList" :key="index">
                <div class="title">
                    <span>{{dateSet(groups.title)}}</span>
                    <span>￥{{groups.total}}</span>
                </div>
                <ul class="secondStatistic">
                    <li v-for="(group,index) in groups.items" :key="index">
                        <div >
                            <span>
                                {{tagShow(group.selectedTags)}}
                            </span>
                        </div>
                        <span class="notes">{{group.notes}}</span>
                        <span>￥{{group.amount}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </Layout>  
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import InOut from  '@/components/money/InOut.vue';
import dayjs from "dayjs"

type RecordItem= {
    selectedTags:string[];
    notes:string;
    inout:string;
    amount:string;
    createAd:string;
}

type argumentItem={
    id:number;
    name:string;
}

@Component({
    components:{
        InOut
    }
})
export default class Statistic extends Vue {
    type = "-";
    recordStore:RecordItem[] = this.$store.state.recordsList.recordList;
    get recordList(){
        //this.type = type
        
        let newList  = this.recordStore.filter(item=>{
            return item.inout === this.type
        }).sort((a,b)=>{
            return dayjs(b.createAd).valueOf() - dayjs(a.createAd).valueOf()
        })
        if(!newList.length){
            return newList
        }
        let result = [
            {
                title:newList[0].createAd,
                items:[newList[0]],
                total:0
            }
        ]
        for(let i=1;i<newList.length;i++){
            if(dayjs(result[result.length-1].title).isSame(dayjs(newList[i].createAd),'day')){
                result[result.length-1].items.push(newList[i])
            } else {
                result.push({title:newList[i].createAd,items:[newList[i]],total:0})
            }
        }

        result.forEach(group=>{
            //group.title = dayjs(group.title).format("YYYY年M月D日");
            group.total =group.items.reduce((sum,item)=>{
                
                return sum + parseFloat(item.amount)*10000
            },0)/10000
        })
        return result
    }
    created(){

        //console.log(this.recordList);
    }
    dateSet(title:string){
        let now = new Date();
        if(dayjs(title).isSame(dayjs(now),"day")){
            return `今天 - ${dayjs(title).format("M月D日")}`
        } else {
            if(dayjs(title).isSame(dayjs(now),"year")){
                if(dayjs(title).isSame(dayjs(now).subtract(1,"day"),"day")){
                    return `昨天 - ${dayjs(title).format("M月D日")}`
                }
                return dayjs(title).format("M月D日")
            } else {
                return dayjs(title).format("YYYY年M月D日")
            }
            
        }
    }
    tagShow(tags:argumentItem[]){
        //console.log(tags);
        let allName;
        if(tags.length){
            allName = tags.reduce((tagsall,item)=>{
                return tagsall + item.name
            },"")
        } else {
            allName = "无"
        }
        return allName
    }
    toggleType(type:string){
        this.type = type;
        //console.log(result);
    }
}
</script>

<style lang="scss" scoped>
.statisticInout ::v-deep{
    .moneyIn,.moneyOut{
        background:#fff;
    }
}
.firstStatistic{
    >li{
        width:100%;
        display:flex;
        flex-wrap: wrap;
        .title{
            width:100%;
            display:flex;
            justify-content: space-between;
            line-height:40px;
            padding:0 15px;
           >span{
               &:first-child{
                   font-size:20px;
                   font-weight:bold;
               }
            } 
        }
        ul.secondStatistic{
            width:100%;
            background:#fff;
            padding:0 15px;
            li{
                display:flex;
                justify-content: space-between;
                line-height:40px;
                .notes{
                    flex-grow:1;
                    margin-left:10px;
                    font-size:16px;
                    color:#B5B5B5;
                }
            }
        }
    }
}
</style>