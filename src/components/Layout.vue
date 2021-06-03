<template>
    <div class="nav-wrapper">
        <div class="content">
            <slot></slot>
        </div>
        
        <Nav></Nav>
    </div>
</template>

<script>
export default {
    

}
</script>

<style scoped>
.nav-wrapper{
    height:100vh;
    display:flex;
    flex-direction: column;
}
.nav-wrapper .content{
    flex-grow: 1;
}

</style>