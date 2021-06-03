<template>
    <div class="nav">
        <router-link class="btn" to="/tag" active-class="red">
        <Icon name="tag"></Icon>
        <span>标签</span>
        </router-link>
        <router-link class="btn" to="/writer" active-class="red">
        <Icon name="money"></Icon>
        <span>记一笔</span>
        </router-link>
        <router-link class="btn" to="/statistics" active-class="red">
        <Icon name="static"></Icon>
        <span>统计</span>
        </router-link>
    </div>    
</template>

<script>

export default {
    
}
</script>

<style scoped>
.btn{
    text-decoration: none;
    color:rgba(0,0,0,0.5);
    width:33.33333%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding:6px 0px;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}
.btn span{
    margin-top:4px;
}
.nav{
    box-shadow:0 0 10px rgba(0,0,0,0.08);
    display:flex;
}
.red{
    color:red;
}
</style>