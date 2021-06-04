<template>
    <div class="nav-wrapper">
        <div class="content" :class="classPrefix && `${classPrefix}-content`">
            <slot></slot>
        </div>
        
        <Nav></Nav>
    </div>
</template>

<script>
export default {
    props:["classPrefix"]

}
</script>

<style lang="scss" scoped>
.writeLayout-content{
    display:flex;
    flex-direction: column;
    justify-content:flex-end;
    align-content:flex-end;
}
.nav-wrapper{
    height:100vh;
    display:flex;
    flex-direction: column;
}
.nav-wrapper .content{
    flex-grow: 1;
}

</style>