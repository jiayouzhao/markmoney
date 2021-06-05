<template>
    <div class="showTag">
        <div class="tags">
            <span>衣</span>
            <span>食</span>
            <span>住</span>
            <span>行</span>
        </div>
        <a href="javascript:;">新增标签</a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.showTag{
    padding:10px 15px;
    .tags{
        margin-bottom:15px;
        span{
            display:inline-block;
            background:#D9D9D9;
            margin-right:15px;
            padding:5px 18px;
            border-radius:26px;
            margin-bottom:5px;
        }
    }
    a{
       border-bottom:1px solid #DDDDDD;
       padding:0 5px 3px;
    }
}
</style>