<template>
    <svg :class="'svgIcon '+name">
        <use :xlink:href="'#'+name"></use>
    </svg>
</template>

<script>
const importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
    console.log(error);
}

export default {
    props:["name"]
}
</script>

<style lang="scss" scoped>
.svgIcon{
    width: 36px; 
    height: 30px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.svgIcon[class~="money"]{
    margin-left:-7px;
}

</style>