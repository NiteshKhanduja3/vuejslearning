<!-- Script -->
 <script setup>




 defineProps({
    color:{
        type:String,
        required:true
    },
    textValue:{
      type:String,
      required:true
    }
 })

function onClick() {
    console.log("Clicked")
}



</script >


<!-- Template -->
<template>
<button @click="onClick" :style="{background:color}" class="btn">{{ textValue }}</button>
</template>



<!-- style -->