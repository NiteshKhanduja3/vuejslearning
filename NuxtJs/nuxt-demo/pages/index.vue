
<script setup>
const show = ref(false)
</script>



<template>
    <h1>Hello Home</h1>
    <Card />
    <br>
    <NestedCompCard/>


    <hr>
    <button @click="show = true" >Show phone</button>
    <LazyMobile v-if="show"/>
</template>